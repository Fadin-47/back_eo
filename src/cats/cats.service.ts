import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interface/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    if (id === 33) {
      return {name: 'Vasya', age: 22, type: '33'}
    } else throw new HttpException(`Кот с id ${id} не найден`, HttpStatus.NOT_FOUND);
  }
}