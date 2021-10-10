import { Auction } from './../../auction/entities/auction.entity';
import { Review } from './../../review/entities/review.entity';
import { Favorite } from './../../favorite/entities/favorite.entity';
import { User } from './../../auth/entities/user.entity';
import { ProductImage } from './product_image.entity';
import { Category } from './../../category/entities/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'float' })
  initPrice: number;

  @Column({ type: 'float' })
  stepPrice: number;

  @Column({ type: 'float', nullable: true })
  price: number;

  @Column({ type: 'timestamptz', nullable: true })
  expiresDate: Date;

  @Column({ nullable: true, default: false })
  isExtension: boolean;

  @Column({ nullable: true, default: false })
  isDelete: boolean;

  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ nullable: true })
  sellerId: number;

  @ManyToOne(() => User, (user) => user.product)
  @JoinColumn({ name: 'sellerId' })
  seller: User;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  images: ProductImage[];

  @OneToMany(() => Favorite, (favorite) => favorite.product)
  favorite: Favorite[];

  @OneToMany(() => Review, (review) => review.product)
  review: Review[];

  @OneToMany(() => Auction, (auction) => auction.product)
  auction: Auction[];

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
