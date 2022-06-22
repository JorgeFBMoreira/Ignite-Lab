# Apontamentos

Este documento tem apontamentos sobre as vídeo-aulas passadas, comandos e até código (caso necessário).<br>
Em futuras aulas, posso criar vários documentos para apontamentos a fim de deixar tudo organizado.<br>


## Video-aulas - Commits
1ª vídeo aula: 
- Título: Ignite Lab | Aula 1 • O início da especialização em ReactJS;
- Commit: 5992f8f9867d86dcb068f78cd9ea6d4606136c3a.
2ª vídeo-aula:
- Título: Ignite Lab | Aula 2 • Estrutura visual do projeto;
- Commit: 74d6ffdac5d86a432f661eae06815ec26658c25e.

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