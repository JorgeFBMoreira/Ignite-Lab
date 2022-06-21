import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'YOUR_API_URL',
    cache: new InMemoryCache()
})