import { BaseResolver } from '@/shared/base/base.resolver';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth.dto';

@Resolver()
export class AuthResolver extends BaseResolver {
  constructor(private userService: AuthService) {
    super();
  }

  @Mutation('login')
  async login(@Args('input') input: AuthLoginDto) {
    const data = await this.userService.login(input);
    return this.response(data);
  }
}
