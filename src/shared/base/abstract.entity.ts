import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AbstractDto } from './abstract.dto';
import { Constructor } from './type';

export interface IAbstractEntity<DTO extends AbstractDto, O = never> {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  toDto(options?: O): DTO;
}

export abstract class AbstractEntity<
    DTO extends AbstractDto = AbstractDto,
    O = never,
  >
  extends BaseEntity
  implements IAbstractEntity<DTO, O>
{
  private dtoClass: Constructor<DTO, [AbstractEntity, O?]>;

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;

  toDto(options?: O): DTO {
    const dtoClass = this.dtoClass;

    if (!dtoClass) {
      throw new Error(
        `You need to use @UseDto on class (${this.constructor.name}) be able to call toDto function`,
      );
    }

    return new this.dtoClass(this, options);
  }

  constructor(partial?: Partial<DTO>) {
    super();
    Object.assign(this, partial);
  }
}
