import React from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface IProps {}

const StyledConfigurations = styled.div`
  color: pink;
`

export function ApolloProvider(props: IProps) {
  return (
    <StyledConfigurations>
      <h1>Welcome to configurations!</h1>
    </StyledConfigurations>
  )
}
