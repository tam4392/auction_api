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
export class Auction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float', nullable: true })
  currentPrice: number;

  @Column({ type: 'float', nullable: true })
  maxPrice: number;

  @Column({ type: 'float', nullable: true })
  maxPriceBidder: number;

  @Column({ nullable: true, default: false })
  isSuccess: boolean;

  @Column({ nullable: true, default: false })
  isDelete: boolean;

  @Column({ nullable: true })
  productId: number;

  @ManyToOne(() => Product, (product) => product.auction)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ nullable: true })
  bidderId: number;

  @ManyToOne(() => User, (user) => user.lstBidder)
  @JoinColumn({ name: 'bidderId' })
  bidder: User;

  @Column({ nullable: true })
  winnerId: number;

  @ManyToOne(() => User, (user) => user.lstWinner)
  @JoinColumn({ name: 'winnerId' })
  winner: User;

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
