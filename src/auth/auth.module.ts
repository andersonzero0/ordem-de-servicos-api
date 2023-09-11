import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, JwtModule.registerAsync({
    useFactory: () => ({
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: "60d" }
    })
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
