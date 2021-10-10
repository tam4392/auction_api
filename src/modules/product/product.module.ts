import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product_image.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
  providers: [],
  controllers: [],
  exports: [],
})
export class ProductModule {}
