import { SAVE_TAREA_SUCCESS, UPDATE_TAREA_SUCCESS } from './types';
import _ from 'lodash';

const initialState = {
    // activo = 1, completado = 2, cancelado = 3
    tareas: [
        {
            id: 0,
            name: 'Tarea inicial',
            status: 1,
            createdDate: 1620541713870,
            updateDate: '',
            location: '20.721461, -103.413472'
        },
        {
            id: 1,
            name: 'Tarea dos',
            status: 1,
            createdDate: 1620541713870,
            updateDate: '',
            location: '20.715449, -103.384317'
        },
        {
            id: 2,
            name: 'Tarea final',
            status: 2,
            createdDate: 1620541713870,
            updateDate: 1620541713870,
            location: '20.716712, -103.370647'
        }
    ]
};

export default function tareasReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TAREA_SUCCESS:
            // Se agregará la tarea a las que ya tenemos almacenadas
            return {
                ...state,
                tareas: _.uniqWith(state.tareas.concat(action.payload), _.isEqual),
            };
        case UPDATE_TAREA_SUCCESS:
            return {
                ...state,
                tareas: state.tareas.map(function (item) {
                    return (item.id == action.payload.id) ? action.payload : item
                })
            };
        default:
            return state
    }
}
