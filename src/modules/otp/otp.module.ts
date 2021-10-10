import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [],
  exports: [],
})
export class OtpModule {}
