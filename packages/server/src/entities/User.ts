import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true, type: 'text' })
  email!: string;

  @Field(() => String)
  @Column({ unique: true, type: 'text' })
  username!: string;

  @Field(() => String)
  @Column('text')
  name!: string;

  @Column('text')
  password!: string;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date;
}

export default User;
