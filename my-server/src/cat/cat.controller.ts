import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cat')
export class CatController {
    constructor(private catsService: CatService) {
        console.log('Creation of Cat controller with cats service');
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<string> {
        this.catsService.create(createCatDto);
        return 'Your cat has been added to our collection'
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.catsService.findOne(id);
    }

}
