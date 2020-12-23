import { Body, Controller, Get, Post, HttpException, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';

import { ResponseArroy } from '../common/global-interface/response-arroy.interface';

import { User } from './interface/user.interface';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('getAllUsers')
    async getAllUsers(): Promise<ResponseArroy> {
        const allUsers = await this.usersService.getAllUsers();
        return {
            message: `Найдено ${allUsers.length} пользователей`,
            result: allUsers,
        };
    }

    @Get('findUser')
    async findUser(@Query('name') name: string): Promise<ResponseArroy> {
        const user: User = await this.usersService.findUser(name);
        if (!user) {
            throw new HttpException('Ничего не найдено', HttpStatus.NOT_FOUND);
        } else return {
            message: 'Найден пользователь',
            result: user,
        }
    }

    @Post('createUser')
    async createUser(@Body() createUser: CreateUserDto): Promise<ResponseArroy> {
        try {
            this.usersService.createUser(createUser);
            return {
                message: 'Успешно',
                result: 'Создан новый пользователь'
            };
        } catch (err) {
            throw new HttpException('Не удалось создать нового пользователя', HttpStatus.BAD_REQUEST);
        }
    }
}
