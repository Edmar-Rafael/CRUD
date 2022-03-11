import { compose, createStore } from "redux"
import middlewares from "./middlewares"

const rootReducer = (type, action) => {
  return appReducer(type, action)
}

const store = createStore(rootReducer, compose(...middlewares))