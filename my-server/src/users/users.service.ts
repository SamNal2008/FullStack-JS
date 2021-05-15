import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InvalidClassException } from "@nestjs/core/errors/exceptions/invalid-class.exception";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto): User {
    let newUser = User.createUserFromDto(createUserDto);
    console.log(newUser);
    let newUserEntity = this.userRepository.create(newUser);
    this.userRepository.save(newUserEntity).then(user => {
      if (user) {
        return user;
      }
      else {
        throw new HttpException({
          status: 401,
          message: "Invalid parameter"
        }, HttpStatus.BAD_REQUEST);
      }
    }).catch(
        
    );
    return newUserEntity;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  getOneByLogin(login: string): Promise<User | undefined> {
    return this.userRepository.findOne(login);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
