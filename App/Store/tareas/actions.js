import {
    SAVE_TAREA_SUCCESS,
    UPDATE_TAREA_SUCCESS,
    APP_LOADING
} from './types';

export const saveTarea = (value) => async dispatch => {
    try {
        loading(dispatch, true);
        // Aquí se haría una peteción al servidor
        // if (status === 200) {
        saveTareaSuccess(dispatch, value);
        // }
    } catch (error) {
        console.log('$ Error', error);
        loading(dispatch, false);
    }
};

const saveTareaSuccess = async (dispatch, data) => {
    await dispatch({
        type: SAVE_TAREA_SUCCESS,
        payload: data
    });
    loading(dispatch, false);
};

export const updateTarea = (value) => async dispatch => {
    try {
        loading(dispatch, true);
        // Aquí se haría una peteción al servidor
        // if (status === 200) {
        updateTareaSuccess(dispatch, value);
        // }
    } catch (error) {
        console.log('$ Error', error);
        loading(dispatch, false);
    }
};

const updateTareaSuccess = async (dispatch, data) => {
    await dispatch({
        type: UPDATE_TAREA_SUCCESS,
        payload: data
    });
    loading(dispatch, false);
};

const loading = (dispatch, load) => {
    dispatch({ type: APP_LOADING, payload: load });
};