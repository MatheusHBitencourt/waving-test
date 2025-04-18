import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getUsers(): Promise<any> {
    return this.service.getUsers();
  }

  @Post()
  async createUser(@Body() user: any): Promise<any> {
    return this.service.createUser(user);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<any> {
    return this.service.getUserById(id);
  }

  @Put(':id')
  async updateUserById(@Param('id') id: string): Promise<any> {
    return this.service.updateUserById(id);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string): Promise<any> {
    return this.service.deleteUserById(id);
  }
}
