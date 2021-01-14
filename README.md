<h1 align="center">
    TodoAPI
</h1>
<br>

## Features

- [x] CRUD de tarefas
- [x] Notificação por email quando a tarefa estiver perto de expirar
- [x] Autenticação com JWT
      <br>

## Rodando a aplicação

#### Antes de começar você tem que ter instalado na sua maquina: [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/).

1. Clonar o repositório
   ```bash
   git clone https://github.com/Ribeir0o/todoAPI.git
   ```
1. Entrar na pasta do projeto
   ```bash
   cd todoAPI
   ```
1. Instalar as dependências
   ```bash
   npm install
   ```
1. Rodar migrações
   ```bash
   npm run migrate
   ```
1. Rodar seed (Opcional)

   ```bash
   npm run seed
   ```

1. Startar server em modo de desenvolvimento
   ```bash
   npm run dev
   ```

## Autenticação

| Metodo | Endpoint     | Funcionalidade                               |
| ------ | ------------ | -------------------------------------------- |
| POST   | /api/v1/auth | Retorna JWT caso login e senha sejam validos |
| POST   | /api/v1/user | Criar novo usuario                           |

<br>

## Endpoints

<br>

#### Todos os endpoints abaixo precisam de autenticação

| Metodo | Endpoint         | Funcionalidade                  |
| ------ | ---------------- | ------------------------------- |
| GET    | /api/v1/todo     | Listar todas as tasks           |
| POST   | /api/v1/todo     | Criar nova task                 |
| PUT    | /api/v1/todo/:id | Editar a task com o id passado  |
| DELETE | /api/v1/todo/:id | Deletar a task com o id passado |
