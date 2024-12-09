# Task Master

## Descrição

Task Master é uma aplicação de gerenciamento de tarefas que utiliza Next.js como framework principal, autenticação com Auth.js e um banco de dados PostgreSQL gerenciado com Prisma. O projeto está configurado para usar Docker para facilitar a inicialização do banco de dados.

---

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **Auth.js**: Utilizado para autenticação com provedores como o Google.
- **Prisma**: ORM para interação com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Docker**: Para facilitar o setup do banco de dados.

---

## Requisitos

1. Node.js instalado em sua máquina.
2. Docker e Docker Compose configurados.
3. Conta no Google Cloud para configurar autenticação.

---

## Configuração do Ambiente

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seu-usuario/task-master.git
   cd task-master
   ```

2. **Configure as Variáveis de Ambiente**:

   - No repositório, há um arquivo `env.exemplo`.
   - Copie o arquivo e renomeie-o para `.env`:
     ```bash
     cp .env.exemplo .env
     ```
   - Atualize as variáveis de ambiente com suas credenciais:
     - `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL.
     - `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET`: Obtidos no Google Cloud.

3. **Configure a Autenticação no Google**:

   - Acesse o [Google Cloud Console](https://console.cloud.google.com/).
   - Crie um novo projeto.
   - Ative a API de autenticação.
   - Gere credenciais do tipo `OAuth 2.0`.
   - Configure os URIs de redirecionamento:
     - Para desenvolvimento local: `http://localhost:3000/api/auth/callback/google`

4. **Inicie o Banco de Dados com Docker**:

   - Certifique-se de que o Docker está em execução.
   - Use o arquivo `docker-compose.yml`:

     ```yaml
     version: "3"

     services:
       postgres:
         image: postgres:latest
         container_name: task-master-database
         environment:
           POSTGRES_USER: postgres
           POSTGRES_PASSWORD: password
           POSTGRES_DB: task_master
         ports:
           - "5432:5432"
         volumes:
           - ./.postgres-data:/var/lib/postgresql/data

     volumes:
       .postgres-data:
     ```

   - Execute o comando:
     ```bash
     docker-compose up -d
     ```

5. **Instale as Dependências**:

   - Execute:
     ```bash
     npm install
     ```

6. **Rode as Migrações do Prisma**:

   - Execute:
     ```bash
     npx prisma migrate dev
     ```

7. **Inicie o Servidor de Desenvolvimento**:
   - Inicie o Next.js:
     ```bash
     npm run dev
     ```
   - A aplicação estará disponível em `http://localhost:3000`.

---

## Comandos Disponíveis

- **Iniciar o servidor**:
  ```bash
  npm run dev
  ```
- **Rodar migrações**:
  ```bash
  npx prisma migrate dev
  ```
- **Ver dados no Prisma Studio**:
  ```bash
  npx prisma studio
  ```
- **Parar o banco de dados**:
  ```bash
  docker-compose down
  ```

---
