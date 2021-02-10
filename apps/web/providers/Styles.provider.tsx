// PLUGINS IMPORTS //
import React from 'react'

// COMPONENTS IMPORTS //
import { ChakraProvider } from '@chakra-ui/react'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  children: React.ReactNode
}

export function StylesProvider(props: IProps): React.ReactElement {
  return <ChakraProvider>{props.children}</ChakraProvider>
}
