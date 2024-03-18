import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql';

@ArgsType()
export class CreateUserDto extends CreateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  @MaxLength(20, { message: 'The length max of full name invalid !' })
  fullName: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Short Name is not empty !' })
  @MaxLength(5, { message: 'The length max of full name invalid !' })
  shortName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phone: string;

  @Field()
  linkedIn: string;

  @Field()
  role: number;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  isFrozen: number;

  @Field()
  @IsOptional()
  skills?: string[];
}
