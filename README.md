# PROJETO MOVIE MAKER

## Requisitos

Para desenvolvimento, você só precisará do Node.js v16 instalado em seu ambiente.

## Node

[Node](http://nodejs.org/) é realmente fácil de instalar e agora inclui [NPM](https://npmjs.org/).
Você deve conseguir executar o seguinte comando após o procedimento de instalação
abaixo.

$ node --version
v16.20.2

$ npm --version
8.19.4

## Instalação do Node no OS X

Você precisará usar um Terminal. No OS X, você pode encontrar o terminal padrão em
`/Applications/Utilities/Terminal.app`.

Por favor, instale o [Homebrew](http://brew.sh/) se ainda não tiver feito isso com o comando a seguir.

```
$ ruby ​​-e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Se tudo estiver bem, você deve executar

```
brew install node
```

## Instalação do Node no Linux

```
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
```

## Instalação do Node no Windows

Basta acessar o [site oficial do Node.js](http://nodejs.org/) e pegar o instalador.
Além disso, certifique-se de ter `git` disponível no seu PATH, `npm` pode precisar dele.

---

## Instalar

```
$ git clone https://github.com/pqnoje/react-graphql.git
$ cd react-graphql/backend
$ npm install
$ cd react-graphql/frontend
$ npm install
```

## Configurar aplicativo

Altere a constante uri em `backend/app.js` com o seu endpoint de mongodb criado no Atlas ou outro noSQL como CosmosDB:

## Iniciar o backend

```
$ cd react-graphql/backend
$ npm run dev
```

## Iniciar o backend

```
$ cd react-graphql/frontend
$ npm start
```

## Sobre o projeto

Esse projeto tem como por objetivo demonstrar a inserção e obteção de dados de filmes armazenados em documentos no MongoDB e suas chamadas de API atravéz do GraphQL. No projeto de frontend é utilizado o Apollo para fazer as requisições em componentes ReactJS.

## Arquivos comuns

No backe-end temos a estrutura de pastas

```
/models
/resolver
/schema
```

Temos o arquivo model.js que tem um schema de representação de Movie. 
Temos o arquivo resolver.js que contém métodos para obter um movie, todos os movies e salvar um movie.
Temos o arquivo schema que tem essas queries acima em GraphQL para obter movies e salva-los no MongoDB.

## Abstrato
Esse projeto tem como fins demonstrativos para apresentar meus conhecimentos com NodeJS, MongoDB, GraphQL e JavaScript.

## Autores

Jefferson Fernandes de Lucena
pqnoje@hotmail.com

## Licença

Esse sóftware pode ser copiado e alterado no seu repositório. Pode ser evoluido e comercializado.
