import { Favorite } from './entities/favorite.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
  providers: [],
  controllers: [],
  exports: [],
})
export class FavoriteModule {}
