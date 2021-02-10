import React from 'react'
import Components, { ComponentsProps } from './components'
import { text } from '@storybook/addon-knobs'

export default {
  component: Components,
  title: 'Components',
}

export const primary = () => {
  const props: ComponentsProps = {
    title: text('title', 'Artem'),
  }

  return <Components title={props.title} />
}
