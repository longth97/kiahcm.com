import '../styles/globals.css'

import { AppProps } from 'next/app'
import React from 'react'
import { ApolloProvider } from '@apollo/client'

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      
    </ApolloProvider>
  )
}

export default App