import applyMiddlewares from 'redux'
import thunk from 'redux-thunk'

const middlewares = applyMiddlewares(thunk)

export default middlewares