import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ nullable: false })
  firstName!: string;

  @ApiProperty()
  @Column({ nullable: false })
  lastName!: string;

  @ApiProperty()
  @Column({ unique: true, nullable: false, length: '255' })
  email!: string;

  @ApiProperty()
  @Column({ unique: true, nullable: false, length: '32' })
  username!: string;
}
