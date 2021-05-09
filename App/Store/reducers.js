import { combineReducers } from 'redux'
import tareasReducer from './tareas/reducers'

const rootReducer = combineReducers({
  tareasReducer,
})

export default rootReducer