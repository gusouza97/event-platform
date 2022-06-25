import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tf73mt029a01ukc01hbt9g/master',
    cache: new InMemoryCache()
})