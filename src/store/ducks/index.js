import { combineReducers } from "redux";
import dragonsState from "./dragons";
import createDragonState from './creating'
import updateDragonState from './update'

const reducers = combineReducers({
  dragonsState,
  createDragonState,
  updateDragonState
})

export default reducers