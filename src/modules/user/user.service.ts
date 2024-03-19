import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/repositories/users.repository';
import { UserEntity } from '@/entity/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { customResponseError } from '@/shared/error/custom-error';
import { convertTime } from '@/shared/utils/convertTime';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(input: CreateUserDto) {
    try {
      const { fullName, shortName, email, password, phone, gender, role } =
        input;
      const isEmail = await this.userRepository.findOne({
        where: { email },
      });

      if (isEmail) {
        throw new BadRequestException('Email already exists !');
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const data = {
        fullName: fullName,
        shortName: shortName,
        email: email,
        password: hashedPassword,
        phone: phone,
        gender: gender,
        role: role,
      };

      const userSave = await this.userRepository.save(data);

      const newData = {
        fullName: userSave.fullName,
        shortName: userSave.shortName,
        email: userSave.email,
        phone: userSave.phone,
        startDate: convertTime(userSave.createdAt),
        endDate: null,
        gender: userSave.gender,
        linkedIn: null,
        isFrozen: userSave.isFrozen,
        role: userSave.role,
        createdAt: userSave.createdAt.toString(),
        updatedAt: userSave.updatedAt.toString(),
      };
      return newData;
    } catch (error) {
      customResponseError(error);
    }
  }
}
