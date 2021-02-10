import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from '../components/layout'
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
