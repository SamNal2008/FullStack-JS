import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Entity()
export class User {

  @PrimaryGeneratedColumn() private _id: number;

  @Column() private _login: string;

  @Column() private _mail: string;

  @Column() private _password: string;

  @Column() private _promo: number;

  @Column() private _picture: string;

  @Column() private _firstName: string;

  @Column() private _lastName: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get promo(): number {
    return this._promo;
  }

  set promo(value: number) {
    if (value <= new Date().getFullYear())
      this._promo = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  public static createUser(id: number, login: string, mail: string, promo: number, picture: string, firstName: string, lastName: string): User {
    let myUser = new User();
    myUser.id = id;
    myUser.login = login;
    myUser.mail = mail;
    myUser.promo = promo;
    myUser.picture = picture;
    myUser.firstName = firstName;
    myUser.lastName = lastName;
    return myUser;
  }

  public static createUserFromDto(createUserDto: CreateUserDto): User {
    let myUser = new User();
    myUser.id = createUserDto.uid;
    myUser.lastName = createUserDto.family_name;
    myUser.firstName = createUserDto.given_name;
    myUser.picture = createUserDto.picture;
    myUser.login = createUserDto.preferred_username;
    myUser.promo = createUserDto.graduation_years;
    myUser.mail = createUserDto.email;
    return myUser;
  }

}
