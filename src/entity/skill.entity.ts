import { AbstractEntity } from '@/shared/base/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('skill')
export class SkillEntity extends AbstractEntity {
  @Column()
  name: string;
}
