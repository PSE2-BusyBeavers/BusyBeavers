import { createClient as createWSClient } from 'graphql-ws';
import { createClient, subscriptionExchange, defaultExchanges, Provider } from 'urql';
import { devtoolsExchange } from '@urql/devtools';

// const endpoint = 'localhost:8124/v1/graphql';
const endpoint = ' https://lrxtdrwgxgrvfmwtefkr.nhost.run/v1/graphql';

const headers = {
  // "x-hasura-admin-secret": "myadminsecretkey",
};

export function loadClient() {
  const wsClient = createWSClient({
    url: `ws://${endpoint}`,
    connectionParams: async () => ({
      headers: headers,
    }),
  });

  const urqlOptions = {
    url: `http://${endpoint}`,
    fetchOptions: () => ({
      headers: headers,
    }),
    exchanges: [
      devtoolsExchange,
      ...defaultExchanges,
      subscriptionExchange({
        forwardSubscription: (operation) => ({
          subscribe: (sink) => ({
            unsubscribe: wsClient.subscribe(operation, sink),
          }),
        }),
      }),
    ],
  };

  return createClient(urqlOptions);
}

export { Provider };
