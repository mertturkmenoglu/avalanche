import { IsEmail, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
class LoginData {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @MinLength(6)
  password!: string;
}

export default LoginData;
