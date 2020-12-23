<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Реализация

HTTP-сервер реализован на фреймворке NestJS. Код написан на TypeScript.

## Для развертывания приложения

```bash
$ npm install
```

## Запуск HTTP-сервера

```bash
# для запуска приложения
$ npm run start
```

## Описание методов API

### Получить список всех пользователей
```bash
# точка входа
http://localhost:3001/users/getAllUsers

# метод
GET-запрос

# входные данные
отсутствуют

# выходные данные JSON-объект
{
  message: 'Успено',
  result: [массив данных],
}
```

### Поиск пользователя по имени
```bash
# точка входа
http://localhost:3001/users/findUser

# метод
GET-запрос

# входные данные
name=фамилия или имя или отчество

# выходные данные JSON-объект
{
  message: 'Найден пользователь',
  result: [массив данных],
}
```

### Создать нового пользователя
```bash
# точка входа
http://localhost:3001/users/createUser

# метод
POST-запрос

# входные данные
{
  id: number;
  username: string;
  position: string;
  email: string;
  phoneInternal: number;
  address: string;
  office: string;
}

# выходные данные JSON-объект
{
  message: 'Успешно',
  result: 'Создан новый пользователь'
}
```

## Разработчики
- [Антон Захаров](http://znode.ru)
