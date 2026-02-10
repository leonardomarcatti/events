FROM node:20-alpine

WORKDIR /app

# 👇 instala pnpm E concurrently global
RUN npm install -g pnpm concurrently

# Copia manifests
COPY package.json ./
COPY backend/package.json backend/pnpm-lock.yaml ./backend/
COPY frontend/package.json frontend/pnpm-lock.yaml ./frontend/

# Instala dependências
RUN pnpm install
RUN cd backend && pnpm install
RUN cd frontend && pnpm install

# Copia o restante do projeto
COPY . .

EXPOSE 3000 3001

CMD ["pnpm", "run", "dev"]
