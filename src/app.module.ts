import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, ConfigModule.forRoot({
    envFilePath: '.env'
  }), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
