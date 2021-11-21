import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: false })
  lastName!: string;

  @Column({ unique: true, nullable: false, length: '255' })
  email!: string;

  @Column({ unique: true, nullable: false, length: '32' })
  username!: string;
}
