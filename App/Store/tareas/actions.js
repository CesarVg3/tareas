import { SAVE_TAREA_SUCCESS, UPDATE_TAREA_SUCCESS } from './types';

export const saveTarea = (value) => async dispatch => {
    try {
        // Aquí se haría una peteción al servidor
        // if (status === 200) {
        saveTareaSuccess(dispatch, value);
        // }
    } catch (error) {
        console.log('$ Error', error);
    }
};

const saveTareaSuccess = async (dispatch, data) => {
    await dispatch({
        type: SAVE_TAREA_SUCCESS,
        payload: data
    });
};

export const updateTarea = (value) => async dispatch => {
    try {
        // Aquí se haría una peteción al servidor
        // if (status === 200) {
        updateTareaSuccess(dispatch, value);
        // }
    } catch (error) {
        console.log('$ Error', error);
    }
};

const updateTareaSuccess = async (dispatch, data) => {
    await dispatch({
        type: UPDATE_TAREA_SUCCESS,
        payload: data
    });
};