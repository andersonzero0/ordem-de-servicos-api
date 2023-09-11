import { Body, Post, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService
  ) {}

  @Post()
  async login(@Body() data: Auth) {

    const access_token = await this.auth.login(data.email, data.password)

    return access_token
    
  }
}
