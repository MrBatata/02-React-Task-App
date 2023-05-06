import { ROLES } from './roles.enum';

export class User {
  constructor(username, email, password, confirm) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirm = confirm; // to confirm password
    this.role = ROLES.USER;
  }
}
