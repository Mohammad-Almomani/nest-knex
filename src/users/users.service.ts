import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ModelClass } from 'objection';
import { UserModel } from 'src/db/Models/User.model';

@Injectable()
export class UsersService {
  // constructor(@InjectConnection() private readonly knex: Knex) {}
  constructor(@Inject('UserModel') private UserClass: ModelClass<UserModel>) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    // const users = await this.knex.table('Users');
    const users = await this.UserClass.query().select('firstName');
    return { users };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
