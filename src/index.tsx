import * as React from 'react'

export function typeVerifier<U extends React.ComponentType<any>>() {
  type Props = U extends React.ComponentType<infer P> ? P : never
  return {
    verify<T extends Props>(x: React.ComponentType<T>) {
      return x
    }
  }
}

export type Button = React.ComponentType<{
  onClick?: () => void
  children?: React.ReactNode
  emphasis?: 'standard' | 'primary' | 'secondary' | 'positive' | 'negative'
}>

export type Panel = React.ComponentType<{
  title?: React.ReactNode
  bottomBar?: React.ReactNode
  topBar?: React.ReactNode
  children?: React.ReactNode
}>

export type Field = React.ComponentType<{
  label?: React.ReactNode
  children?: React.ReactNode
}>
