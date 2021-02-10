import React from 'react'
import styled from 'styled-components'

/* eslint-disable-next-line */
export interface IProps {}

export function Header(props: IProps) {
  return (
    <Wrapper>
      <h1>Welcome to Header!</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: pink;
`
