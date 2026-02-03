import { Controller, Post, Body } from '@nestjs/common';

@Controller('/auth')
export class AuthenticationController {
  @Post('/')
  authenticate(@Body() payload: string): void {
    console.log(payload);
  }
}
