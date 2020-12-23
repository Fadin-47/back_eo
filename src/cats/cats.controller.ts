import { Controller, Get, Post, Body, HttpException, HttpStatus, Query, ParseIntPipe, } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { ResponseArroy } from '../common/global-interface/get-request.interface';
import { Cat } from './interface/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get('findAll')
    async findAll(): Promise<ResponseArroy> {
        return {
            message: 'All cats',
            result: this.catsService.findAll(),
        };
    }

    @Get('findCat')
    async findOne(@Query('id', ParseIntPipe) id: number): Promise<ResponseArroy> {
        return {
            message: 'Найден кот',
            result: this.catsService.findOne(id),
        }
    }

    @Post('createCat')
    async createCat(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        throw new HttpException('Мы пытались создать кота, но ничего не вышло', HttpStatus.INTERNAL_SERVER_ERROR);

    }
}