import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

let apolloClient = null;

const createApolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const initializeApollo = () => {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return createApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = createApolloClient;
  }

  return apolloClient;
};
