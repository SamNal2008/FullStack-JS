import { Body, Controller, Get, HttpException, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {

    @Get()
    getAllDogs() {
        return [];
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    async createDog(@Body() createDogDto: CreateDogDto) {
        throw new ForbiddenException();
    }

    @Get('simpleForbidden')
    async getSimpleForbiddenDogs() {
        throw new HttpException('Forbidden simple', HttpStatus.FORBIDDEN); // 'message' field and status
    }

    @Get('forbidden')
    async getForbiddenDogs() {
        throw new HttpException({
            error: 'Here is the custom message', // Set the name & value in the JSON response
            custom: 'Some more custom info',
            status: HttpStatus.FORBIDDEN,
        },
        HttpStatus.FORBIDDEN);
    }

    @Get('customForbidden')
    async getCustomForbiddenDogs() {
        throw new ForbiddenException(); // cf ForbiddenException class
    }
}
