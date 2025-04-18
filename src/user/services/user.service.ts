import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(user: any): Promise<any> {
    return this.repository.createUser(user);
  }

  async getUsers(): Promise<any> {
    return this.repository.getUsers();
  }

  async getUserById(id: string): Promise<any> {
    return this.repository.getUserById(id);
  }

  async updateUserById(id: string): Promise<any> {
    return this.repository.updateUserById(id);
  }

  async deleteUserById(id: string): Promise<any> {
    return this.repository.deleteUserById(id);
  }
}
