# Integrated Postman Documentation

https://documenter.getpostman.com/view/3871398/SzRxV9oR?version=latest

# Documentation

## Base URL

http://localhost:3000/users

## Register

- POST /register
- body

```
{
    fullname: String,
    email: String,
    password: String
}
```

## Login

- POST /login
- body

```
{
    email: String,
    password: String
}
```
