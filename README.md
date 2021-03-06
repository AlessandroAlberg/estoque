# Estoque
CRUD onde possa ser possível criar produtos.

# Pré requisitos
- Git ([https://git-scm.com/](https://git-scm.com/))
- Node ([https://nodejs.org/](https://nodejs.org/))

# Instalação
Para baixar e rodar na sua própria máquina o projeto é bem simples, é só seguir o passo-a-passo a seguir:

## Start
Partindo do princípio que vocês não estão familiarizados com o **Git** ou **Node.js**, então primeiro você precisa instalar o [Node.js](https://nodejs.org/) no seu pc, caso o seu pc seja **Windows** eu recomento estar utilizando o gerenciador de pacotes [Chocolatey](https://chocolatey.org/) para baixar o **Node.js** e todas as outras dependências. Após a instalação do **Node.js**, recomendo você baixar e instalar o **[Git](https://git-scm.com/)** na sua máquina.

## Clonando o Repositório
Com o Git e o Node.js instalado na sua máquina, para pegar a **URL** do projeto é só clicar em **Code** no GitHub.

<img src="./web/src/assets/get-url.png">

Com a **URL** do projeto em mãos, crie em algum lugar do seu pc uma pasta para criarmos uma cópia do repositório, dentro dela (Se você estiver utilizando o Windows) abra o **cmd** ou **powershell** e digite os comandos abaixo:

```
git@github.com:AlessandroAlberg/estoque.git

-- Instalar dependências do Node.js
cd estoque/server
npm install

-- Instalar dependências do React
cd..
cd web
npm install
```

## Banco de dados
Para configurarmos o nosso banco de dados na **API** basta rodar no console os comandos abaixo:

```
npm run knex:migrate
npm run knex:seed
```
## Executar API e aplicação em React

Para a execução da nossa API, abra um console na pasta *server* e basta executar o comando abaixo:

```
npm run dev
```

Já para executarmos a aplicação em React basta abrir outro console na pasta *web* e executar o comando abaixo:

```
npm start
```

## Telas

Na aplicação existe 4 telas:

### Home

Na Home encontramos algumas informações
<img src="./web/src/assets/home.png">

### Detalhes dos produtos

Podemos ver todos os produtos cadastrados e seus detalhes, além de podermos criar novos produtos, atualizar ou deletar os já existentes
<img src="./web/src/assets/show-products.png">

### Criar novos produtos

Podemos adicionar novos produtos
<img src="./web/src/assets/create.png">

### Atualizar produtos

Podemos atualizar os produtos
<img src="./web/src/assets/update.png">