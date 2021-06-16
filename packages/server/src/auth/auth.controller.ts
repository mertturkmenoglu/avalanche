import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(): Promise<string> {
    return 'a';
  }

  @Get()
  getHello(): Promise<User[]> {
    return this.authService.findAll();
  }
}
