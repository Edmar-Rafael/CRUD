import { combineReducers } from "redux";
import dragonsState from "./dragonsList";
import createDragonState from './creating'
import updateDragonState from './update'
import deleteDragonState from "./delete";
import loginState from './login';
import changeLanguageState from "./changeLanguage";

const reducers = combineReducers({
  dragonsState,
  createDragonState,
  updateDragonState,
  deleteDragonState,
  loginState,
  changeLanguageState
})

export default reducers