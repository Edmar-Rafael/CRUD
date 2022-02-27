import { compose, createStore } from "redux"
import middlewares from "./middlewares"

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const store = createStore(compose(...middlewares))

export default store