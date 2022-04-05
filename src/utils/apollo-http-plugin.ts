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
        const extensions = response?.errors?.[0].extensions;
        const status =
          (<any>extensions?.exception)?.status ||
          (<any>extensions?.response)?.statusCode;

        if (typeof status === 'number') {
          response.http.status = status;
        }
      },
    };
  }
}
