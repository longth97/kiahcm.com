import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckjv2st4dnxw001z1gsct21na/master",
  cache: new InMemoryCache(),
  credentials: "same-origin",
});
