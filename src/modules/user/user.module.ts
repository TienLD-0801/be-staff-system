import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from '@/entity/user.entity';
import { SkillEntity } from '@/entity/skill.entity';
import { UserRepository } from '@/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, SkillEntity])],
  providers: [UserResolver, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
