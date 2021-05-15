import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor() {
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  public async login(@Request() req) {
    return req.user;
  }

  @Post('/signup')
  public async signup() {

  }
}
