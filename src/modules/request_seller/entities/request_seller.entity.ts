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
export class RequestSeller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: false })
  isAccept: boolean;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => User, (user) => user.requestSeller)
  @JoinColumn({ name: 'userId' })
  user: User;

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
