import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';
import { LoginInput } from '@/graphql';


@ArgsType()
export class AuthLoginDto extends LoginInput {
  @Field()
  @IsString()
  @IsEmail({}, { message: 'Invalid email address !' })
  @IsNotEmpty({ message: 'Email is not empty !' })
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Password is not empty !' })
  password: string;
}
