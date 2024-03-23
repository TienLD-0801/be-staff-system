import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput } from '@/graphql';

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
  @MaxLength(12, { message: 'The length max of short name invalid !' })
  shortName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Email is not empty !' })
  email: string;

  @Field()
  @MinLength(8, { message: 'The length min of password invalid !' })
  @IsNotEmpty({ message: 'Password is not empty !' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Phone Name is not empty !' })
  phone: string;

  @Field()
  @IsNotEmpty({ message: 'Role Name is not empty !' })
  role: number;

  @Field()
  @IsOptional()
  @IsNotEmpty({ message: 'Gender is not empty !' })
  gender?: number;
}

@ArgsType()
export class UpdateUserDto extends UpdateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Full Name is not empty !' })
  @MaxLength(20, { message: 'The length max of full name invalid !' })
  @IsOptional()
  fullName?: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Short Name is not empty !' })
  @MaxLength(12, { message: 'The length max of short name invalid !' })
  @IsOptional()
  shortName?: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Email is not empty !' })
  @IsOptional()
  email?: string;

  @Field()
  @IsOptional()
  phone?: string;

  @Field()
  @IsOptional()
  linkedIn?: string;

  @Field()
  @IsOptional()
  role?: number;

  @Field()
  @IsOptional()
  gender?: number;

  @Field()
  @IsOptional()
  skills?: string[];
}
