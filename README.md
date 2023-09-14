# Desafio Kukac

# 🎯Objetivo:

Desenvolver uma aplicação uma aplicação web dividida em frontend e backend, com o processamento de dados ocorrendo exclusivamente no backend. O projeto engloba a resolução de quatro problemas distintos.

## ❓Problemas a serem resolvidos

### 1. Números Palíndromos

Números palíndromos são aqueles que podem ser lidos da mesma maneira da esquerda para a direita e vice-versa (por exemplo, 929, 44, 97379). Crie um algoritmo que imprima todos os números palíndromos dentro de um intervalo escolhido pelo usuário.

### 2. Cálculo de Troco

Desenvolva um algoritmo que calcule o número mínimo de notas (1, 10 e 100 reais) que um caixa deve fornecer como troco para um cliente que realizou uma compra. O valor da compra e o valor entregue pelo cliente devem ser informados pelo usuário. Além disso, mostre o valor do troco e a quantidade de cada tipo de nota presente no troco.

### 3. Controle de Veículos

Nesta parte, precisamos melhorar o controle dos dados de veículos em nossa garagem. Siga as instruções abaixo:

- Crie uma interface chamada "Veiculo" com os seguintes atributos:
  - Modelo
  - Ano de fabricação
  - Quantidade de Portas
  - Marca

- Crie uma classe chamada "Carro" que herde da interface "Veiculo" e inclua o seguinte atributo:
  - Quantidade de Portas (entre 2 e 4)

- Crie uma classe chamada "Moto" que herde da interface "Veiculo" e inclua os seguintes atributos:
  - Rodas: 2
  - Passageiros (entre 1 e 2)

Solicite ao usuário que preencha as informações sobre o seu veículo e salve os dados em um arquivo JSON para evitar o uso de um banco de dados, uma vez que se assemelhará a um banco NoSQL.

### 4. Consulta de CEPs

O usuário deverá informar 5 CEPs, e a aplicação deve consumir a API VIACep (https://viacep.com.br/) para obter dados sobre esses CEPs. Os CEPs informados pelo usuário devem ser armazenados inicialmente em um array, e o consumo da API deve ser síncrono (aguardando a resposta de um CEP antes de iniciar a requisição do próximo). Após o processamento, exiba os dados na tela.
  
# 🖥️Tecnologias utilizadas:
  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


## 📋 Pré-requisitos:

- Docker versão 24.0.5
- Docker compose versão v2.20.2

# 🛠️ Como Utilizar:

1. Clone o repositório para sua máquina utilizando o comando:
  
	`git clone git@github.com:leonardocbrand/kukac-challenge.git`

2. Abra um terminal na **pasta raiz do repositório** e execute o comando <code>npm run compose:up</code> ou o comando <code>docker-compose up</code> na pasta /kukac-challenge;

3. Aguarde todos os contêineres ficarem de pé;

4. Após isso, você poderá acessar o frontend da aplicação localmente através do localhost na porta 3000, no link: <link>http://localhost:3000</link>.

## 📷 Preview:

#### Início
![alt text](./preview/tela1.png)

#### Palindromo
![alt text](./preview/tela2.png)

#### Calcular troco
![alt text](./preview/tela3.png)

#### Registrar veículos
![alt text](./preview/tela4.png)

#### Buscar CEP's
![alt text](./preview/tela5.png)
