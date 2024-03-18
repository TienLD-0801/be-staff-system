import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { BaseResolver } from 'src/shared/base/base.resolver';
import { CreateUserDto } from './dto/user.dto';

@Resolver()
export class UsersResolver extends BaseResolver {
  constructor(private usersService: UsersService) {
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
