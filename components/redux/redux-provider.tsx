'use client'

import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import store from '.'

export function ReduxProvider({ children }: { children: ReactNode }) {

  if (!store) {
    console.error('Redux store is undefined')
    return <div>Error: Redux store is not available</div>
  }
  
  return <Provider store={store}>{children}</Provider>
}
