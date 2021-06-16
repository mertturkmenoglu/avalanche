import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity';
import { ConfigModule } from '@nestjs/config';

const TypeOrm = TypeOrmModule.forRoot({
  url: process.env.DATABASE_URL,
  type: 'postgres',
  entities: [User],
  synchronize: true,
});

@Module({
  imports: [AuthModule, TypeOrm, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
