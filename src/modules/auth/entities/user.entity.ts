import { Otp } from './../../otp/entities/otp.entity';
import { Auction } from './../../auction/entities/auction.entity';
import { Review } from './../../review/entities/review.entity';
import { RequestSeller } from './../../request_seller/entities/request_seller.entity';
import { Favorite } from './../../favorite/entities/favorite.entity';
import { Product } from './../../product/entities/product.entity';
import { Role } from './../../roles/entities/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true, default: false })
  isActive: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  expiresDate: Date;

  @Column({ nullable: true })
  roleId: number;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @OneToMany(() => Product, (product) => product.seller)
  product: Product[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favorite: Favorite[];

  @OneToMany(() => RequestSeller, (requestSeller) => requestSeller.user)
  requestSeller: RequestSeller[];

  @OneToMany(() => Review, (review) => review.reviewer)
  lstReview: Review[];

  @OneToMany(() => Review, (review) => review.evaluated)
  lstEvaluated: Review[];

  @OneToMany(() => Auction, (auction) => auction.bidder)
  lstBidder: Auction[];

  @OneToMany(() => Auction, (auction) => auction.winner)
  lstWinner: Auction[];

  @OneToMany(() => Otp, (otp) => otp.user)
  lstCode: Otp[];
}
