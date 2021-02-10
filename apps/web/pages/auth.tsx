import React from 'react'
import styled from 'styled-components'

/* eslint-disable-next-line */
export interface IProps {}

export default function Auth(props: IProps) {
  return (
    <StyledAuth>
      <h1>Welcome to auth!</h1>
    </StyledAuth>
  )
}

const StyledAuth = styled.div`
  color: pink;
`
