import { Auction } from './entities/auction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Auction])],
  providers: [],
  controllers: [],
  exports: [],
})
export class AuctionModule {}
