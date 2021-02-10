// # PLUGINS IMPORTS //
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

// # COMPONENTS IMPORTS //
import { Header } from '@app/web/components/layout'
import { AppProvider, AuthProvider } from '@app/web/providers'

// export function AuthProvider(props: { children: React.ReactNode }) {
//   return <>{props.children}</>
// }

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuthProvider>
        <Head>
          <title>Welcome to web!</title>
        </Head>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </AppProvider>
  )
}
