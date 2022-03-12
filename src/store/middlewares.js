import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middlewares = [applyMiddleware(thunk)]

export default middlewares