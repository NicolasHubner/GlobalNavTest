# Global Nav Teste

Esse projeto consiste em testar backend e frontend de uma aplicação que simula o WhatsApp.

## Pontos

- Backend

  - [x] Autenticação
  - [x] Criação de usuário
  - [x] Criação de grupo
  - [x] Criar conversa avulsa (sem grupo)
  - [x] Listar conversas
  - [ ] Socket

- Frontend

  - [x] Login
  - [x] Criação de usuário
  - [x] Listagem de conversas
  - [ ] Criar conversa avulsa (sem grupo)
  - [ ] Listar conversas
  - [ ] Socket

## Descrevento o projeto

(1) Aplicação em geral

-Backend

    - Construido em NodeJS com Express e MongoDB como banco de dados.
    - Autenticação feita com JWT.
    - Socket.io para comunicação em tempo real(TENTATIVA).

-Frontend

    - Construção utilizanbdo EXPO;
    - Native base para estilização
    - Axios para chamaadas de API's;
    - Socket.io para comunicação em tempo real(TENTATIVA).
    - Redux para gerenciamento de estado.
    - React Native Navigation para navegação entre telas.
    - Criação de telas: Login, Registro, Home;

(2) Tecnologias utilizadas

-Backend

    - NodeJS
    - Express
    - MongoDB
    - JWT
    - Socket.io
    - Mongoose

-Frontend

    - React Native
    - Expo
    - Native Base
    - Axios
    - Socket.io
    - Redux
    - React Native Navigation
    - React Hook Form

## Antes de rodar o projeto

- É necessário ter o Node instalado na máquina;
- É necessário ter o Yarn instalado na máquina;
- É necessário ter o Expo instalado na máquina;
- Ter um emulador ou um dispositivo físico para rodar o projeto;

## Como rodar o projeto

-Backend

    - Clone o projeto
    - Entre na pasta backend

```
yarn install
```

- Rode o servidor com o comando:

```
 yarn start
```

-Frontend

    - Clone o projeto
    - Entre na pasta frontend

```
 yarn install
```

- Rode o projeto com o comando:

```
 yarn start
```

    - Baixe o aplicativo do expo no seu celular ou rode no emulador
    - Leia o QR Code gerado pelo expo
