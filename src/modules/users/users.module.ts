import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserEntity } from '@/entity/user.entity';
import { SkillEntity } from '@/entity/skill.entity';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, SkillEntity])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
