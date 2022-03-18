import { combineReducers } from "redux";
import dragonsState from "./dragonsList";
import createDragonState from './creating'
import updateDragonState from './update'
import deleteDragonState from "./delete";
import loginState from './login'

const reducers = combineReducers({
  dragonsState,
  createDragonState,
  updateDragonState,
  deleteDragonState,
  loginState
})

export default reducers