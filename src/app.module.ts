import { OtpModule } from './modules/otp/otp.module';
import { AuctionModule } from './modules/auction/auction.module';
import { ReviewModule } from './modules/review/review.module';
import { RequestSellerModule } from './modules/request_seller/request_seller.module';
import { FavoriteModule } from './modules/favorite/entities.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { RoleModule } from './modules/roles/role.module';
import { configValidationSchema } from './config/schema';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configOrm } from './config/orm';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync(configOrm),
    AuthModule,
    RoleModule,
    CategoryModule,
    ProductModule,
    FavoriteModule,
    RequestSellerModule,
    ReviewModule,
    AuctionModule,
    OtpModule
  ],
})
export class AppModule {}
