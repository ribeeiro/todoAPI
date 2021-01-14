<h1 align="center">
    TodoAPI
</h1>
<br>

## Features

- [x] CRUD de tasks
- [x] Notificação por email quando a task estiver perto de expirar
- [x] Autenticação com JWT
      <br>

## Configurando variaveis de ambiente

1. Substitua os valores das variaveis no arquivo [.env.sample](.env.sample) por valores reais
1. Renomeie o arquivo para .env

## Rodando a aplicação

#### Antes de começar você tem que ter instalado na sua maquina: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com/).

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

##### O server vai começar na porta 8080 caso nao tenha uma variavel de ambiente chamada PORT

## Usando a aplicação

### Essa seção assume que você ja esteja rodando o servidor na sua maquina. Caso nao tenha iniciado o servidor ainda, veja como iniciar [aqui](#Rodando-a-aplicação)

1. Com o servidor rodando, envie uma requisição do tipo POST para o endpoint /api/v1/user, no body da requisição envie um JSON com as chaves name, email e password.

   ```JSON
      {
         "name": "thiago",
         "email": "thiagogr71@gmail.com",
         "password": "secret"
      }
   ```

   #### Você deve receber uma resposta com status 201 dizendo que o usuario foi criado com sucesso

1. Para se autenticar, envie um POST para /api/v1/user, no body envie um JSON com o seu email e sua senha.

   ```JSON
      {
         "email": "thiagogr71@gmail.com",
         "password": "secret"
      }
   ```

   #### Você deve receber um token parecido com esse:

   ```JSON
      {
           "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiiJ0aGlhZ29nLnJAaG90bWFpbC5jb20iLCJpYXQiOjE2MTA2MzUyNTIsImV4cCI6MTYxMDY3ODQ1Mn0.yLjdYkTjrb43I_jyrQ0RCY_9MxhJyWM9tSnuihjrph7FWPj-YLRdOEBYfaXGHmTocv9T7IhIblbJR8TkKjASFg8DD4nC2xIA7M1dVE8H73QS_Cl0BPiob06SZeHkQSBokev3zLkuUf0ZNEq6q4hsdFvq8ESmZBZnsGPCs0EC6TRQOFuqfzKJXsc2yrVm_81qIFA-UdVKwjpkS0i0LR5Yh_aVk3NKDqui8Aq5J-DD3mNbcfQdmWnmM2xGeQzqkW3PtGPRoTMrm6gkhJ_--LqOrql4j74hwILRSr7dZn-eWPei9TXGdU8kumm-ZZAkx3iuVDTO_oIgFZgcrG9pjuL76Q"
      }
   ```

   #### Esse token expira em 12 horas.

1. Agora basta copiar o token que foi gerado e mandar pelo header das suas requisições uma chave com o nome "authorization", e com o valor "Bearer " + token
   #### Note que é necessario colocar um espaço entre Bearer e seu token

## Autenticação

| Metodo | Endpoint     | Funcionalidade                               |
| ------ | ------------ | -------------------------------------------- |
| POST   | /api/v1/auth | Retorna JWT caso login e senha sejam validos |
| POST   | /api/v1/user | Cria novo usuario                            |

## Endpoints

#### Todos os endpoints abaixo precisam de autenticação

| Metodo | Endpoint         | Funcionalidade                 |
| ------ | ---------------- | ------------------------------ |
| GET    | /api/v1/todo     | Lista todas as tasks           |
| POST   | /api/v1/todo     | Cria nova task                 |
| PUT    | /api/v1/todo/:id | Edita a task com o id passado  |
| DELETE | /api/v1/todo/:id | Deleta a task com o id passado |
