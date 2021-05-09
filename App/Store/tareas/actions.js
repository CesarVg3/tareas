import { SAVE_TAREA_SUCCESS } from './types';

export const saveTarea = (value) => async dispatch => {
    console.log("$ saveeee", value);
    try {
        // Aquí se haría una peteción al servidor
        // if (status === 200) {
        saveTareaSuccess(dispatch, value);
        // }
    } catch (error) {
        console.log("$ Error", error);
    }
};

const saveTareaSuccess = async (dispatch, data) => {
    await dispatch({
        type: SAVE_TAREA_SUCCESS,
        payload: data
    });
};