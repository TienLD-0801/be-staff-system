import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SkillEntity } from './skill.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  fullName: string;

  @Column()
  shortName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ default: null })
  linkedIn?: string;

  @Column()
  role: number;

  @Column({ default: null })
  endDate: string;

  @Column({default: false})
  isFrozen: boolean;

  @Column({default : 2})
  gender: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => SkillEntity)
  @JoinTable()
  skills?: SkillEntity[];
}
