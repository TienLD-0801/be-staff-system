import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from './users.service';
import { SkillEntity } from 'src/entity/skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, SkillEntity])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
