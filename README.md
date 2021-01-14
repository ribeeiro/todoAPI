<h1 align="center">
    TodoAPI
</h1>
<br>

## Features

<hr>

- [x] CRUD de tarefas
- [x] Notificação por email quando a tarefa estiver perto de expirar
- [x] Autenticação com JWT

## Autenticação

<hr>

| Metodo | Endpoint     | Funcionalidade                               |
| ------ | ------------ | -------------------------------------------- |
| POST   | /api/v1/auth | Retorna JWT caso login e senha sejam validos |
| POST   | /api/v1/user | Criar novo usuario                           |

<br>

## Endpoints

<hr>
<br>

#### Todos os endpoints abaixo precisam de autenticação

| Metodo | Endpoint         | Funcionalidade                  |
| ------ | ---------------- | ------------------------------- |
| GET    | /api/v1/todo     | Listar todas as tasks           |
| POST   | /api/v1/todo     | Criar nova task                 |
| PUT    | /api/v1/todo/:id | Editar a task com o id passado  |
| DELETE | /api/v1/todo/:id | Deletar a task com o id passado |
