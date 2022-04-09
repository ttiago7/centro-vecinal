import { combineReducers } from "redux";
import { darkModeReducer } from "./themeReducer";
import {
  userLoginReducer,
  userDeleteReducer,
  userRegisterReducer,
} from "./userReducer";

const reducer = combineReducers({
  // listar los reducers
  // renombrar reducers
  darkMode: darkModeReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDelete: userDeleteReducer,
});

export default reducer;
