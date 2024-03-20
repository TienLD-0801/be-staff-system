import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.DB_HOST),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logger: 'debug',
  charset: 'utf8mb4',
  entities: [path.join(__dirname, '../..', '/entities/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../..', '/migration/*{.ts,.js}')],
  synchronize: true,
  autoLoadEntities: true,
  logging: false,
};

export default dbConfig;
