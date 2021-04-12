import { IsEmail, Length, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
class RegisterData {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @Length(1, 32)
  username!: string;

  @Field()
  @Length(1, 255)
  name!: string;

  @Field()
  @MinLength(6)
  password!: string;
}

export default RegisterData;
