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
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  comment: string;

  @Column({ nullable: true })
  rating: number;

  @Column({ nullable: true, default: false })
  isDelete: boolean;

  @Column({ nullable: true })
  productId: number;

  @ManyToOne(() => Product, (product) => product.review)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ nullable: true })
  reviewerId: number;

  @ManyToOne(() => User, (user) => user.lstReview)
  @JoinColumn({ name: 'reviewerId' })
  reviewer: User;

  @Column({ nullable: true })
  evaluatedId: number;

  @ManyToOne(() => User, (user) => user.lstEvaluated)
  @JoinColumn({ name: 'evaluatedId' })
  evaluated: User;

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
