import * as React from 'react'

export function typeVerifier<U>() {
  return {
    verify<T extends U>(x: T) {
      return x
    }
  }
}

export type Button = React.ComponentType<{
  onClick: () => void
  children: React.ReactNode
}>
