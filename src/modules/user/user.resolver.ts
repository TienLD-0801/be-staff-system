import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { BaseResolver } from 'src/shared/base/base.resolver';
import { CreateUserDto } from './dto/user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/shared/guards/auth.guard';
import { Pager } from '@/graphql';

@Resolver()
export class UserResolver extends BaseResolver {
  constructor(private usersService: UserService) {
    super();
  }

  @Query('getAllUsers')
  async getAllUsers(@Args('pager') pager: Pager) {
    const data = await this.usersService.getAllUsers(pager);
    return this.response(data);
  }

  @Query('getUserById')
  async getUserById(@Args('id') id: string) {
    const data = await this.usersService.getUserById(id);
    return this.response(data);
  }

  @Mutation('createUser')
  @UseGuards(JwtAuthGuard)
  async createUser(@Args('input') input: CreateUserDto) {
    const data = await this.usersService.createUser(input);
    return this.response(data);
  }
}
