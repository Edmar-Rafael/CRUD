import { combineReducers } from "redux";
import dragonsState from "./dragonsList";
import createDragonState from './creating'
import updateDragonState from './update'
import deleteDragonState from "./delete";

const reducers = combineReducers({
  dragonsState,
  createDragonState,
  updateDragonState,
  deleteDragonState
})

export default reducers