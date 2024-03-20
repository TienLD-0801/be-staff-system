import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@/entity/user.entity';
import { UserRepository } from '@/repositories/users.repository';
import { LoginUser } from '@/graphql';
import { AuthLoginDto } from './dto/auth.dto';
import { convertTime } from '@/shared/utils/convertTime';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
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

    const jwt = this.jwtService.sign(
      { id: user.id, email: user.email },
      {
        secret: process.env.JWT_ACCESS_KEY,
        expiresIn: '1d',
      },
    );

    const refreshJwt = await this.jwtService.signAsync(
      { id: user.id, email: user.email },
      {
        secret: process.env.JWT_ACCESS_KEY,
        expiresIn: '7d',
      },
    );

    // set expired token
    const today = new Date();
    today.setDate(today.getDate() + 1);
    today.setHours(today.getHours() + 7);

    return {
      auth: {
        accessToken: jwt,
        refreshToken: refreshJwt,
        expired: new Date(today).toUTCString(),
      },
      profile: {
        fullName: user.fullName,
        shortName: user.shortName,
        email: user.email,
        phone: user.phone,
        linkedIn: user.linkedIn,
        gender: user.gender,
        isFrozen: user.isFrozen,
        role: user.role,
        startDate: convertTime(user.createdAt),
        endDate: null,
        createdAt : user.createdAt.toString(),
        updatedAt : user.updatedAt.toString()
      },
    };
  }
}
