import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlices'

export function makeStore(){
  return configureStore({
    reducer: {
      users: userSlice,
    },})
}

  export const store = makeStore()