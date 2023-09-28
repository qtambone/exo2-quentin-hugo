export class User {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    comment: string;
  
    constructor(firstName: string, lastName: string, age: number, email: string, comment: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.comment = comment;
    }
  }
  