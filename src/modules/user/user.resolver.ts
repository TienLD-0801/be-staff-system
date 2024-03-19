import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { BaseResolver } from 'src/shared/base/base.resolver';
import { CreateUserDto } from './dto/user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/shared/guards/auth.guard';

@Resolver()
@UseGuards(JwtAuthGuard)
export class UserResolver extends BaseResolver {
  constructor(private usersService: UserService) {
    super();
  }

  @Query('getAllUser')
  async getAllUser() {
    return [];
  }

  @Mutation('createUser')
  async createUser(@Args('input') input: CreateUserDto) {
    const data = await this.usersService.createUser(input);
    return this.response(data);
  }
}
