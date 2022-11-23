<div align="center" > 
  <img src="https://user-images.githubusercontent.com/52588477/203448948-4498c6b8-99cd-4cf0-8aed-70c06ce3df7e.svg" width="150px"/>
  <br>
</div>

### <p align="center"> NG.CASH - App financeiro da Nova Geração!</p>
#### <p align="center"> O projeto foi desenvolvido para participar de um processo seletivo, e esse guia irá ajudá-lo a instalar passo a passo, vamos lá? 🚀!</p>


<div align="center">
  <img src="https://img.shields.io/static/v1?label=npm&message=V8.3.1 &labelColor=7431F4&color=555555&style=<for-the-badge>&logo=<ghost>" />
  <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=7431F4&color=555555" />
  <img src="https://img.shields.io/static/v1?label=React&message=V17.0.2 &labelColor=7431F4&color=555555&style=<for-the-badge>&logo=<ghost>" />


</div>

## Tabela de conteúdos
<!--ts-->
   <p align="center">
    • <a href="#instalação"> Instalação </a>

  </p>
<!--te-->

# Instalação

Para usufruir do projeto, basta adicionar o seguinte comando para cloná-lo: <br>
PS: Esse projeto está dividido em dois: frontend e backend, precisamos clonar os dois, ok?

```
git clone https://github.com/Wesed/ng-cash-frontend
git clone https://github.com/Wesed/ng-cash-backend
```

Em seguida, adicionar as dependências. <br>
Primeiro, as depêndencias do frontend:

```
npm i react
npm i react-router-dom
npm i styled-components
npm i crypto-js 
```

Agora vamos para as depêndencias do backend:

```
yarn global typeorm
typeorm init --ngCashBackend --database postgres -- express
yarn add typescript ts-node-dev @types/express -D
yarn add nodemon -D
npm i cors
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```

E por fim, para iniciar o frontend:

```
npm start
```

E o backend:

```
yarn start
```

Caso tenha qualquer dificuldade com o uso ou instalação, entre em contato comigo: ``` dev.wfeduardo@gmail.com ```
Obrigado!
