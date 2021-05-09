import { combineReducers } from 'redux'
import tareasReducer from './tareas/reducers'

// Aquí uniremos los reducers, en este caso solo utilizaremos uno
const rootReducer = combineReducers({
  tareasReducer,
})

export default rootReducer