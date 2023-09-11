import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt/dist';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {
    const userData = await this.user.findUserByEmail(email);

    if(!userData) {
      
      throw new NotFoundException()
      
    }

    
    const isMatch = await compare(password, userData.password);


    if(!isMatch) {

      throw new UnauthorizedException()
      
    }

    const payload = { user: userData.name }

    return {

      access_token: await this.jwtService.signAsync(payload)
      
    }
  }
}
