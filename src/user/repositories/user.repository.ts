import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: any): Promise<any> {
    return this.prisma.user.create({ data: { ...user } });
  }

  async getUsers(): Promise<any> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<any> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUserById(id: string): Promise<any> {
    return this.prisma.user.update({
      where: { id },
      data: { name: 'wilson' },
    });
  }

  async deleteUserById(id: string): Promise<any> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
