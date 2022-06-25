# Apontamentos

Este documento tem apontamentos sobre as vídeo-aulas passadas, comandos e até código (caso necessário).<br>
Em futuras aulas, posso criar vários documentos para apontamentos a fim de deixar tudo organizado.<br>


## Video-aulas - Commits
1ª vídeo-aula: 
- Título: Ignite Lab | Aula 1 • O início da especialização em ReactJS;
- Commit: 5992f8f9867d86dcb068f78cd9ea6d4606136c3a.

2ª vídeo-aula:
- Título: Ignite Lab | Aula 2 • Estrutura visual do projeto;
- Commit: 74d6ffdac5d86a432f661eae06815ec26658c25e.

3ª vídeo-aula:
- Título: Ignite Lab | Aula 3 • Roteamento e player da aula
- Commit: 6f1bface076017bddaef3599625dd86eb1fb9423

4ª vídeo-aula:
- Título: Ignite Lab | Aula 4 • Inscrição via GraphQL
- Commit: 80894c5f77986ac229f6bd8422c06f3a44a47911

5ª vídeo-aula
- Título: Ignite Lab | Aula 5 • Deploy, CodeGen e próximos passos
- Commit: 7a905a1a8663354d5a0ebe827cf077af0b684200



## Apontamentos

> npm create vite@latest
Cria uma estruutura base para a nossa aplicação.
Neste caso, demos o nome de "event-platform", com o uso de react, variante "react-ts".

> npm run dev
Inicia a aplicação

> npm install tailwindcss postcss autoprefixer -D
> npx tailwindcss init -p 
Cria um ficheiro de configuração do 'post.css'.
Uma ferramente que o vite utiliza por debaixo dos panos.
Desta forma vite consegue se integrar com o tailwind em si.

> npm i @apollo/client graphql
Usaremos o Apollo no lugar de outras bibliotecas para trabalhar com as requisições das APIs.
Mais detalhes (aqui)[#Uso-da-API]

> npm install phosphor-react
Biblioteca de icons utilizada neste projeto.

> npm i date-fns
Utilizaremos esta biblioteca para trabalhar com datas. Apesar do próprio JavaScript ter a sua própria API, elas costumam ser "limitadas".

> npm i @vime/core @vime/react --force
O Vime é uma biblioteca para player de vídeo.<br>
Como o Vime utiliza o react v17, para instalar com o react mais recente, utilize o "--force", que forçará a instalação desta biblioteca.<br>
A razão pela qual ele não tem suporte ao react mais recente (v18) é devido a uma freature chamada "streaming server side handling"

> npm install react-router-dom
Biblioteca mais famosa para lidar com roteamento em uma aplicação<br>
Um roteamento nada mais é que uma aplicação ter a permissão de ter várias páginas

> npm install classnames

> npm install @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D
GraphQL Code Generator: Esta biblioteca permitirá que o nosso VSCode, por exemplo, identifique se um dos campos passados pertence ao GraphCMS API. Exemplo prático:
- Video: não pertence à nossa base de dados, porém, caso faça a query no vscode e execute ela no browser, ele não dará erro e não returnará nada.



## Uso da API (GraphCMS)

Ao contrário do Rest e o próprio AXIOS, o Apollo está preparado para o uso do GraphQL.
O Apollo também tem um sistema de cache que, por exemplo, identifica se uma mesma requisição foi feita mais do que uma vez.

Aqui temos um exemplo de código sobre como usariamos o Rest, Axios, ou outros para utilizar a API:
```js
import { useEffect } from "react"

useEffect(() => {
    fetch('API_URL_FROM_GRAPHCMS', {
        method: 'POST',
        body: `query {
            . . .
        }`
    })
})

// Com uma query
const GET_LESSONS_QUERY = `
  query {
    lessons {
      id
      title
    }
  }
`

useEffect(() => {
    client.query({
        query: GET_LESSONS_QUERY,
    }).then(response => {
        console.log(response.data)
    })
}, [])
```


## Codegen

Assim que tiver todos os arquivos, queries, mutations, etc finalizados, dê o seguinte comando:
```cmd
$ npm run codegen
```

Com o script inserido no package.json, ele vai procurar o "codegen" no node_modules e vai executar as instruções do `codegen.yml`.<br>
Nele, como já definimos em que pastas e que arquivos ele deve procurar, ele vai criar um ficheiro com tudo que precisamos para usar na nossa aplicação




##### Termos

CMS
- Content Management System;
- Headless CMS: Trás apenas o painel de admin;
- -> Dados fornecidos através de uma API (Rest ou GraphQL);
- React -> Consome API do CMS;
- Vantagens/Benefícios:
    - Livre uso de qualqual uso de tema, interface, frameworks, etc...


GraphCMS
- Schemas: São, tecnicamente, tabelas no SQL. Também é chamado de "model".
- Cria uma API automaticamente
- No GraphCMS, em "project settings", pode obter a URL da API no "API Access - Content API"

GraphQL
- Só tem dois tipos de operações: query e mutation:
    - query: Buscar dados;
    - mutation: Criar, alterar ou deletar dados.


Slug
- Versão de um título adaptada para uma URL
- Será, no nosso caso, gerado automaticamente

Github "hacks"
- Adicione ".png" no final da URL do seu perfil para obter a URL do seu Avatar (pfp)



## GraphCMS - Playground (queries)

- Exemplo de query
```graphql
query MyQuery {
	lessons {
    id
    slug
    title
    teacher {
			name
      bio
      avatarURL
  	}
  }
}
```



## CLI do Github

> gh repo create
Cria um repositório no GitHub