import React from 'react'

import styled from 'styled-components'

export interface ComponentsProps {
  title: string
}

const StyledComponents = styled.div`
  color: pink;
`

export default function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <h1>Welcome to {props.title}!</h1>
    </StyledComponents>
  )
}
