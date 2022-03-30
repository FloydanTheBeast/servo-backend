import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

@Plugin()
export class HttpPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener> {
    return {
      async willSendResponse({ response }) {
        const status = (<any>response?.errors?.[0]?.extensions?.exception)
          ?.status;

        if (typeof status === 'number') {
          response.http.status = status;
        }
      },
    };
  }
}
