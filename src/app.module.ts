import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import graphQLConfig from './configs/graphQL';
import { AuthModule } from './modules/auth/auth.module';
import '@/shared/utils/paginate';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import dbConfig from './configs/db/mysql';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return dbConfig;
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid dataSource options passed');
        }
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    GraphQLModule.forRoot(graphQLConfig),
    AuthModule,
    UserModule,
  ],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await this.init();
  }
  async init() {
    new Logger().log(`${AppModule.name} init`);
  }
}
