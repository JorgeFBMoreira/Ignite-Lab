# Ignite Lab

Under development.

## Importante

Não esqueça de colocar a URL do seu banco de dados (GraphCMS) no __event-platform/src/lib/apollotsx__:
```tsx
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'YOUR_API_URL -> Insira a sua URL aqui, substituindo todo este texto',
    cache: new InMemoryCache()
})
```