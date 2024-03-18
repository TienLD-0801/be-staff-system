import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import graphQLConfig from './configs/graphQL';
import { AuthModule } from './modules/auth/auth.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: Number(process.env.DB_HOST),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logger: 'debug',
      charset: 'utf8mb4',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
    }),
    GraphQLModule.forRoot(graphQLConfig),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
