import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { UsersRepository } from '../../repositories/users.repository';
import * as bcrypt from 'bcrypt';
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

    return await this.userRepository.save(data);
  }
}
