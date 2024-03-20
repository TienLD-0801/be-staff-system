import './src/shared/utils/paginate';
const { DataSource } = require('typeorm');
import * as dotenv from 'dotenv';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['./src/entities/*.ts'],
  migrations: ['./src/migrations/*.ts'],
});
