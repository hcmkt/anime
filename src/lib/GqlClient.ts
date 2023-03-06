import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/gql/gql';

class GqlClient {
  static getSdk = () => {
    const accessToken = process.env.ACCESS_TOKEN;
    const graphQLCLIent = new GraphQLClient('https://api.annict.com/graphql', {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    return getSdk(graphQLCLIent);
  };
}

export default GqlClient;
