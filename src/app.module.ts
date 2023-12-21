import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQlModule } from './graphql/graphql.module';
import { UserModule } from './modules/user/user.module';
import { TransbankModule } from './modules/transbank/transbank.module';

import { ProductModule } from './modules/product/product.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GraphQlModule,
    UserModule,
    TransbankModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
