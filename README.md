### Скачать

```
git clone https://github.com/TheHarald/node-assembly-statistics
```

### Конфигурация

Данные для подключения к базе данных MySQL в файле .env

```
DATABASE_URL="mysql://<your_user>:<user_password>@localhost:3306/<db_name>"
```

- your_user - имя пользователя бд
- user_password - пароль
- db_name - база данных

### Запуск

- Для запуская необходим Node.js

Установить зависимости

```
npm i
```

Запуск

```
npm run dev
```

Приложение будет доступно по адресу:
http://localhost:3000/
