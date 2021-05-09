// Validaciones
export const validate = ({ name, status }) => {
    const errors = {};
    if (!name) {
        errors.name = "El nombre de la tarea es requerida";
    } else if (name.replace(/^\s+|\s+$/g, '') === '') {
        errors.name = "El nombre de la tarea es requerida"
    }

    if (!status) {
        errors.status = "El estatus es requerido.";
    } else if (status === 'null') {
        errors.status = "El estatus es requerido.";
    }

    return errors;
};