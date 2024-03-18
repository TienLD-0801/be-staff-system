import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@/entity/user.entity';
import { UsersRepository } from '@/repositories/users.repository';
import { LoginUser } from '@/graphql';
import { AuthLoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async login(input: AuthLoginDto): Promise<LoginUser> {
    const { email, password } = input;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('Invalid user !');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid password');
    }

    const jwt = await this.jwtService.signAsync(
      { id: user.id },
      {
        secret: 'secret',
        expiresIn: '1d',
      },
    );

    const refreshJwt = await this.jwtService.signAsync(
      { id: user.id },
      {
        secret: 'secret',
        expiresIn: '7d',
      },
    );

    // set expired token
    const today = new Date();
    today.setDate(today.getDate() + 1);
    today.setHours(today.getHours() + 7);

    return {
      auth: {
        token: jwt,
        refreshToken: refreshJwt,
        expired: new Date(today).toUTCString(),
      },
      profile: {
        fullName: user.fullName,
        shortName: user.shortName,
        email: user.email,
        phone: user.phone,
        linkedIn: user.linkedIn,
        role: user.role,
        startDate: user.startDate,
        endDate: user.endDate,
        isFrozen: user.isFrozen,
      },
    };
  }
}
