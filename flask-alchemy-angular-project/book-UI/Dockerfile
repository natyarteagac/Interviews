FROM node:16.13-stretch

EXPOSE 4200

WORKDIR /home/ui

COPY package.json package-lock.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

CMD ng serve --host 0.0.0.0 --port 4200
