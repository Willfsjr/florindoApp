# Use a imagem oficial do Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta da aplicação
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["npm", "start"]