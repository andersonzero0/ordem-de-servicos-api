import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client'
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {

    const password = data.password

    const passwordHash = await hash(password, Number(process.env.SALT_OR_ROUNDS))
    
    return this.prisma.user.create({
      data: {
        ...data,
        password: passwordHash
      }
    })
  }

  async findUserByEmail(email: string) {

    return this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
    
  }
}