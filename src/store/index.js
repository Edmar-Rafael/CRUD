import { compose, createStore } from "redux"
import middlewares from "./middlewares"
import appReducer from './ducks'

const rootReducer = (type, action) => {
  return appReducer(type, action)
}

const store = createStore(rootReducer, compose(...middlewares))

export default store