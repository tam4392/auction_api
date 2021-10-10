import { RequestSeller } from './entities/request_seller.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([RequestSeller])],
  providers: [],
  controllers: [],
  exports: [],
})
export class RequestSellerModule {}
