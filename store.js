import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlices'

export default configureStore({
  reducer: {
    counter: navReducer,
  },
})