# Backend Dockerfile
FROM node:25

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "run", "dev"]