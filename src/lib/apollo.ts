import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nmx5sr0fgf01xp6zesdte8/master",
  cache: new InMemoryCache(),
});
