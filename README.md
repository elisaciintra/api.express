API de Autenticação de Usuários

API RESTful desenvolvida em Node.js e Express, com cadastro, login e autenticação via JWT (JSON Web Token). Projeto criado para estudo e prática de boas práticas em desenvolvimento backend.

## Sobre o projeto

Esta API foi construída com foco em práticas reais usadas no mercado:

- Criptografia de senhas com bcrypt
- Autenticação stateless com JWT
- Organização em camadas (rotas, controllers, models, middlewares)
- Tratamento centralizado de erros
- Variáveis de ambiente para dados sensíveis (nunca expostas no código)

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)

## Estrutura do projeto

```
minha-api/
 ├── src/
 │    ├── config/        # Conexão com o banco de dados
 │    ├── controllers/   # Lógica das rotas (regras de negócio)
 │    ├── models/        # Schemas do MongoDB
 │    ├── routes/        # Definição das rotas
 │    ├── middlewares/   # Autenticação e tratamento de erros
 │    └── server.js      # Ponto de entrada da aplicação
 ├── .env.example
 ├── .gitignore
 ├── package.json
 └── README.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou um cluster no [MongoDB Atlas](https://www.mongodb.com/atlas))
- [Git](https://git-scm.com/)

## Instalação e configuração

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/minha-api.git
cd minha-api
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto (veja `.env.example`):
```env
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=uma_chave_secreta_forte_aqui
```

4. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

### Registrar usuário

```
POST /api/users/register
```

**Body:**
```json
{
  "name": "Elisa Souza",
  "email": "elisa@email.com",
  "password": "senha123"
}
```

**Resposta (201 Created):**
```json
{
  "message": "Usuário criado com sucesso!",
  "user": {
    "_id": "664f1b2c8f1a2b001f3e4d5c",
    "name": "Elisa Souza",
    "email": "elisa@email.com"
  }
}
```

### Login

```
POST /api/users/login
```

**Body:**
```json
{
  "email": "elisa@email.com",
  "password": "senha123"
}
```

**Resposta (200 OK):**
```json
{
  "message": "Login bem-sucedido",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Acessando rotas protegidas

Envie o token recebido no login no header de autorização:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

## Tratamento de erros

Erros são tratados por um middleware centralizado, retornando sempre um formato padronizado:

```json
{
  "message": "Descrição do erro",
  "error": "Detalhes técnicos"
}
```

## Como testar

Use uma destas ferramentas para testar os endpoints:

- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)  (Usei essa para testar, recomendo.)
- [Thunder Client](https://www.thunderclient.com/) (extensão do VS Code)

## Próximos passos

- [ ] Testes automatizados (Jest + Supertest)
- [ ] Validação de dados de entrada (express-validator ou Joi)
- [ ] Refresh token
- [ ] Documentação interativa com Swagger
- [ ] Deploy (Render, Railway ou Vercel)

## Licença

Este projeto está sob a licença MIT.

## Autora

Desenvolvido por **Elisa**, durante meu aprendizado em desenvolvimento backend.

- GitHub: [@elisaciintra](https://github.com/elisaciintra/api.express.git)

