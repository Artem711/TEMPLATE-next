// PLUGINS IMPORTS //
import React, { StrictMode } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client'
import { Provider } from 'react-redux'
import { setContext } from '@apollo/client/link/context'

// COMPONENTS IMPORTS //
import store from '@app/web/state/store'
import i18n from '@app/web/i18n'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export const AppProvider = i18n.appWithTranslation(
  (props: { children: React.ReactElement }) => {
    const httpLink = createHttpLink({
      uri: 'http://localhost:3001/graphql',
    })

    const authLink = setContext((_: any, { headers }: any) => {
      const token = localStorage.getItem('token')
      return {
        headers: {
          ...headers,
          authorization: token || '',
        },
      }
    })

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    })

    return (
      <ApolloProvider client={client}>
        <StrictMode>
          <Provider store={store}>
            <div>{props.children}</div>
          </Provider>
        </StrictMode>
      </ApolloProvider>
    )
  }
)
