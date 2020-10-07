import React from 'react'
import * as infancy from '../../lib'

export function BasicButton(props: {
  onClick?: () => void
  children?: React.ReactNode
  emphasis?: 'standard' | 'primary' | 'secondary' | 'positive' | 'negative'
}) {
  return (
    <button
      onClick={props.onClick}
      style={{ display: 'block', boxSizing: 'border-box', width: '100%' }}
    >
      {props.children}
    </button>
  )
}

export function BasicPanel(props: {
  title?: React.ReactNode
  bottomBar?: React.ReactNode
  topBar?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <fieldset>
      <legend>{props.title}</legend>
      <div style={{ display: 'flex' }}>{props.topBar}</div>
      {props.children}
      <div style={{ display: 'flex' }}>{props.bottomBar}</div>
    </fieldset>
  )
}

export function validateTypes() {
  infancy.typeVerifier<infancy.Button>().verify(BasicButton)
  infancy.typeVerifier<infancy.Panel>().verify(BasicPanel)
}
