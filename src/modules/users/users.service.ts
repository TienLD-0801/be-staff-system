import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from '@/repositories/users.repository';
import { UserEntity } from '@/entity/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UsersRepository,
  ) {}

  async createUser(input: CreateUserDto) {
    const {
      fullName,
      shortName,
      email,
      password,
      phone,
      linkedIn,
      role,
      startDate,
      endDate,
      isFrozen,
    } = input;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);

    const data = {
      fullName: fullName,
      shortName: shortName,
      email: email,
      password: hashedPassword,
      phone: phone,
      startDate: newStartDate.toString(),
      endDate: newEndDate.toString(),
      linkedIn: linkedIn,
      isFrozen: isFrozen,
      role: role,
    };

    const userSave = await this.userRepository.save(data);

    return {
      fullName: userSave.fullName,
      shortName: userSave.shortName,
      email: userSave.email,
      phone: userSave.phone,
      startDate: userSave.startDate.toString(),
      endDate: userSave.endDate.toString(),
      linkedIn: userSave.linkedIn,
      isFrozen: userSave.isFrozen,
      role: userSave.role,
    };
  }
}
