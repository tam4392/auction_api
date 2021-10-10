import { Review } from './entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [],
  controllers: [],
  exports: [],
})
export class ReviewModule {}
