FROM node

WORKDIR /app

COPY package.json . 

RUN npm install react-lazy-load-image-component

RUN npm install

COPY . .

## EXPOSE 8080

EXPOSE 8080

CMD ["npm", "run", "dev"]
