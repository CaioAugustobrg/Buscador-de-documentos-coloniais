FROM node:16 AS builder

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY . .
RUN npm run build  # Este comando deve executar o transpilador TypeScript (tsc)

FROM node:16

WORKDIR /app

COPY --from=builder /app/package.json . 
COPY --from=builder /app/dist ./dist

RUN npm install --production

CMD ["node", "dist/server.js"]  # Substitua server.js pelo nome do seu arquivo de entrada JavaScript
