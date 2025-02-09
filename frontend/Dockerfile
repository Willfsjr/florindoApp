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

# Build da aplicação
RUN npm run build

# Use uma imagem do servidor web para servir a aplicação
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta da aplicação
EXPOSE 80

# Comando para rodar o servidor web
CMD ["nginx", "-g", "daemon off;"]