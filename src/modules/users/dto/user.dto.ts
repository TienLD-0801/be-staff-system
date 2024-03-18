import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';
import { CreateUserInput } from '@/graphql';

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
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  phone: string;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  linkedIn: string;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  role: number;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  startDate: string;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  endDate: string;

  @Field()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  isFrozen: number;

  @Field()
  @IsOptional()
  skills?: string[];
}
