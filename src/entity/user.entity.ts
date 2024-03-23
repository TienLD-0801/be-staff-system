import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { SkillEntity } from './skill.entity';
import { AbstractEntity } from '@/shared/base/abstract.entity';

@Entity('user')
export class UserEntity extends AbstractEntity {
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

  @Column({ default: false })
  isFrozen: boolean;

  @Column({ default: 2 })
  gender: number;

  @ManyToMany(() => SkillEntity)
  @JoinTable()
  skills?: SkillEntity[];
}
