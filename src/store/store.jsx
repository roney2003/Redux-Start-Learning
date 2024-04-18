import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './reducers/counterSlice' 

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // ye counterSlice ka reducer hai jo ki state ko change karta hai
  },
})