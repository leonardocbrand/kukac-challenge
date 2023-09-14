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
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


## 📋 Pré-requisitos:

- Docker versão 23.0.5
- Docker compose versão v2.5.0

# 🛠️ Como Utilizar:

1. Clone o repositório para sua máquina utilizando o comando:
  
	`git clone git@github.com:julio-silveira/shopper-challenge.git`

2. Após finalizar o download, abra a pasta **/app** e crie um arquivo **.env** contendo as mesmas variáveis de ambiente presentes no arquivo **.env.example**, ou use os dados do exemplo abaixo:
	<pre><code> DATABASE_URL=mysql://root:root@db:3306/shopper
	PORT=3000
	WEB_PORT=5173
	VITE_API_URL=http://localhost:${PORT}/</code></pre>

3. Abra um terminal na **pasta raiz do repositório** e execute o comando <code>npm run compose:up</code> ou o comando <code>docker-compose up</code> na pasta /app;

4. Aguarde todos os contêineres ficarem de pé;

5. Após isso, você poderá acessar o frontend da aplicação localmente através do localhost na porta escolhida na variável de ambiente WEB_PORT. Por padrão, a página pode ser acessada nesse link: <link>http://localhost:5173</link>

6.A API pode ser acessada também utilizando o localhost na porta escolhida na variável de ambiente PORT, por padrão <link>http://localhost:3000/<link> Já a documentação da API (Swagger) pode ser acessada na rota **/api <link>http://localhost:3000/api</link>.

7. Existem dois arquivos .csv na pasta /data: rightprices.csv, que pode ser utilizado para atualizar produtos com sucesso, e wrongprices.csv, que propositalmente gera alguns erros para facilitar a testagem da aplicação.

## 📷 Preview:

#### Upload form 1 - início
![alt text](./preview/tela2.png)

#### Upload form 2 - validado com sucesso
![alt text](./preview/tela3.png)

#### Feedback de sucesso ao atualizar produto (snackbar)
![alt text](./preview/tela4.png)

#### Upload form 3 - erros
![alt text](./preview/tela5.png)

#### Mobile
![alt text](./preview/tela6.png)
