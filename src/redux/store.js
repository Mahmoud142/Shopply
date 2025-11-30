import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

const initailState = {}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initailState,
})

export default store
