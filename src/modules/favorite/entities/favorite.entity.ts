import { Product } from './../../product/entities/product.entity';
import { User } from './../../auth/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: false })
  isDelete: boolean;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.favorite)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  productId: number;

  @ManyToOne(() => Product, (product) => product.favorite)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
