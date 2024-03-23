import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/repositories/users.repository';
import { UserEntity } from '@/entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { customResponseError } from '@/shared/error/custom-error';
import { convertTime } from '@/shared/utils/convertTime';
import { Pager } from '@/graphql';
import _ from 'lodash';
import { SkillEntity } from '@/entity/skill.entity';

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

  async getAllUsers(
    pager: Pager,
    filterConditions: object = undefined,
    orderConditions: object = undefined,
  ) {
    const queryBuilder = this.userRepository.createQueryBuilder(
      UserEntity.name,
    );
    if (!_.isEmpty(filterConditions)) {
      // add filters condition here
    }
    if (!_.isEmpty(orderConditions)) {
      // add orders condition here
    }
    // pass final queryBuilder here to paging
    const [userList, paging] = await queryBuilder.paginate(
      pager,
      filterConditions,
      orderConditions,
    );
    // parse result as paging result
    return { userList, paging };
  }

  async getUserById(id: string) {
    if (!id.length || id === '0') {
      throw new BadRequestException('ID is not empty !');
    }

    const userById = await this.userRepository.findOne({
      where: { id: id },
    });

    return userById;
  }

  async updateUser(id: string, input: UpdateUserDto) {
    if (!id.length || id === '0') {
      throw new BadRequestException('ID is not empty !');
    }

    const user = await this.userRepository.findOneBy({ id: id });

    if (!user) {
      throw new BadRequestException(`Can't find user with id : ${id}`);
    }

    await this.userRepository.save({
      ...user,
      ...input,
      skills: input.skills as unknown as SkillEntity[],
    });

    const newUpdateUser = {
      fullName: input.fullName,
      shortName: input.shortName,
      email: input.email,
      linkedIn: input.linkedIn,
      phone: input.phone,
      isFrozen: input.isFrozen,
      role: input.role,
      gender: input.gender,
      skills: input.skills,
    };

    return newUpdateUser;
  }
}
