import { SAVE_TAREA_SUCCESS, UPDATE_TAREA_SUCCESS, APP_LOADING } from './types';
import _ from 'lodash';

const initialState = {
    // activo = 1, completado = 2, cancelado = 3
    // el tiempo es en milisegundos
    tareas: [
        {
            id: 0,
            name: 'Tarea inicial',
            status: 1,
            createdDate: 1612877685000,
            updateDate: 1612918210000,
            location: '20.721461, -103.413472'
        },
        {
            id: 1,
            name: 'Tarea secundaria',
            status: 1,
            createdDate: 1620070459000,
            updateDate: '',
            location: '20.715449, -103.384317'
        },
        {
            id: 2,
            name: 'Tarea final',
            status: 2,
            createdDate: 1619190131000,
            updateDate: 1619897659000,
            location: '20.716712, -103.370647'
        },
        {
            id: 3,
            name: 'Tarea nueva',
            status: 1,
            createdDate: 1620426859000,
            updateDate: 1620477259000,
            location: '20.716712, -103.370647'
        }
    ],
    loading: false
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
            // Se actualizará la tarea por medio del id
            return {
                ...state,
                tareas: state.tareas.map(function (item) {
                    return (item.id == action.payload.id) ? action.payload : item
                })
            };
        case APP_LOADING:
            // Manejará el estado de carga
            return { ...state, loading: action.payload };
        default:
            return state
    }
}
