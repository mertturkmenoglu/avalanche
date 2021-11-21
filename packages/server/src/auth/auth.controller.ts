import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@ApiTags('Authentication')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  async login(): Promise<string> {
    return 'a';
  }

  @Get('/dummy-endpoint')
  getHello(): Promise<User[]> {
    return this.authService.findAll();
  }
}
