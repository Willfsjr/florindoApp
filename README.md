# README do Projeto - Sistema de Contagem de Estoque

## Descrição
Este projeto é uma aplicação full-stack que utiliza **React.js** no frontend e **Node.js** com **Express.js** no backend, com um banco de dados **PostgreSQL** hospedado no **CapRover**. O sistema permite a contagem de produtos, oferecendo uma interface simples para os usuários interagirem com a API.

## Estrutura do Projeto
A estrutura do projeto é organizada em três principais diretórios: `backend`, `frontend` e `caprover`, além de arquivos de configuração e documentação.

### Backend
O backend é responsável por gerenciar as requisições da API e interagir com o banco de dados. Ele está localizado no diretório `backend`.

- **src/**: Contém a lógica do servidor.
  - **controllers/**: Lógica de controle das requisições.
    - `produtoController.js`: Controla as operações relacionadas aos produtos.
  - **models/**: Configuração do ORM.
    - `prisma.js`: Configuração do Prisma para conexão com o PostgreSQL.
  - **routes/**: Define as rotas da API.
    - `produtoRoutes.js`: Endpoints para operações de produtos.
  - **middlewares/**: Funções auxiliares para tratamento de requisições.
    - `errorHandler.js`: Middleware para tratamento de erros.
  - `server.js`: Arquivo principal que inicia o servidor Express.

- **.env**: Armazena variáveis de ambiente, como credenciais do banco de dados.

- **package.json**: Lista as dependências e scripts do backend.

- **prisma/**: Contém a configuração do banco de dados.
  - `schema.prisma`: Define o modelo das tabelas.

- **nodemon.json**: Configuração para reiniciar o servidor durante o desenvolvimento.

- **Dockerfile**: Instruções para construir a imagem Docker do backend.

### Frontend
O frontend é uma aplicação React que permite a visualização e contagem de produtos. Ele está localizado no diretório `frontend`.

- **src/**: Contém a lógica da aplicação.
  - **components/**: Componentes reutilizáveis.
    - `ProdutoLista.js`: Componente que renderiza a lista de produtos.
  - **pages/**: Páginas principais da aplicação.
    - `Home.js`: Página principal para visualização e contagem de produtos.
  - **services/**: Gerencia as chamadas à API.
    - `api.js`: Funções para interagir com o backend.
  - `App.js`: Configuração do React Router e estrutura da aplicação.

- **public/**: Contém arquivos estáticos.

- `index.html`: Ponto de entrada do frontend.

- `vite.config.js`: Configuração do Vite para otimização do desenvolvimento.

- **package.json**: Lista as dependências e scripts do frontend.

- **Dockerfile**: Instruções para construir a imagem Docker do frontend.

### CapRover
O CapRover é utilizado para hospedar a aplicação e o banco de dados.

- `docker-compose.yml`: Define os serviços a serem executados no CapRover.

- `caprover-config.json`: Configuração personalizada do CapRover para o deploy.

### Documentação
- **descricao-projeto.txt**: Descrição detalhada da estrutura do projeto e função de cada pasta e arquivo.

## Como Rodar o Projeto
1. **Backend**:
   - Navegue até o diretório `backend`.
   - Instale as dependências: `npm install`.
   - Crie um arquivo `.env` com as variáveis necessárias.
   - Inicie o servidor: `npm start`.

2. **Frontend**:
   - Navegue até o diretório `frontend`.
   - Instale as dependências: `npm install`.
   - Inicie a aplicação: `npm run dev`.

3. **Deploy no CapRover**:
   - Utilize o `docker-compose.yml` para configurar os serviços no CapRover.

## Conclusão
Este projeto foi desenvolvido com uma arquitetura limpa e escalável, utilizando as melhores práticas para garantir fácil manutenção e extensibilidade. A combinação de React.js, Node.js e PostgreSQL proporciona uma base sólida para futuras melhorias e funcionalidades.