import { BaseModel } from '../Base.model';

export class UserModel extends BaseModel {
  static tableName = 'users';
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  city: string | null;
  newColumn: string | null;
  newColumn90: string | null;
  newColumn560: string | null;
  newColumn860: string | null;
  newColumn9960: string | null;
  age: number | null;
  name: string | null;
  //   Comments?: Comments[];
  //   Posts?: Posts[];
}
