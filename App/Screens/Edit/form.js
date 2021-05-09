import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { validate } from './validate';
import { Button, LoadingButton } from '../../Components'

class FormEdit extends Component {

    renderButton = (handleSubmit, errors) => {
        const { loading } = this.props;
        // Verificamos los errores para habilitar el boton
        var disabledBtn = Object.keys(errors).length == 0 ? false : true;
        if (loading) {
            return (
                <LoadingButton />
            );
        } else {
            return (
                <Button onPress={handleSubmit} disabled={disabledBtn}>
                    Guardar
                </Button>
            );
        }
    };

    render() {
        const { inputStyle, inputContainer, buttonStyle, locationView, textLocation } = styles;
        const options = [
            { value: '1', label: 'Activo' },
            { value: '2', label: 'Completado' },
            { value: '3', label: 'Cancelado' },
        ];
        // Utilizamos formik para realzar los formularios
        // Los valores iniciales los tomaremos de los parámetros que se pasaron por la ruta
        const initialValues = this.props.params;

        return (
            <View>
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => this.props.onSubmit(values)}
                    validate={values => validate(values)}
                    validateOnBlur
                    validateOnMount
                >
                    {({ handleChange, handleSubmit, setFieldTouched, setFieldValue,
                        onBlur, values, errors, touched }) => (
                        <View>
                            <KeyboardAwareScrollView
                                enableOnAndroid
                                keyboardShouldPersistTaps="always"
                            >
                                <View style={inputContainer}>
                                    <Text>Nombre</Text>
                                    <TextInput
                                        name="name"
                                        placeholder={"Escribe el nombre de la tarea"}
                                        autoCorrect={false}
                                        value={values.name}
                                        error={errors.name}
                                        onBlur={() => setFieldTouched('name')}
                                        touched={touched.name}
                                        onChangeText={handleChange('name')}
                                        style={inputStyle}
                                    />
                                </View>
                                <View style={inputContainer}>
                                    <Text>Estatus</Text>
                                    <RNPickerSelect
                                        name="status"
                                        placeholder={{
                                            label: "Selecciona un estatus",
                                            value: "null",
                                        }}
                                        items={options}
                                        onValueChange={handleChange('status')}
                                        onClose={onBlur}
                                        style={pickerStyle}
                                        value={values.status.toString()}
                                        key={values.status}
                                    />
                                </View>
                                <View style={inputContainer}>
                                    <Text>Fecha de creación:
                                        {' ' + new Date(parseInt(values.createdDate)).toLocaleString()}
                                    </Text>
                                    {/* Se añadió la opción para abrir en maps */}
                                    <View style={locationView}>
                                        <Text>Ubicación: </Text>
                                        <TouchableOpacity onPress={() =>
                                            Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + values.location)}>
                                            <Text style={textLocation}>{values.location}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={buttonStyle}>
                                    {this.renderButton(handleSubmit, errors)}
                                </View>
                            </KeyboardAwareScrollView>
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 60,
        margin: 20
    },
    buttonStyle: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    loadingStyle: {
        marginBottom: 15
    },
    inputStyle: {
        backgroundColor: 'white',
        height: 50,
        paddingLeft: 15,
        fontSize: 16,
    },
    locationView: {
        flexDirection: 'row',
    },
    textLocation: {
        textDecorationLine: 'underline',
        color: 'blue'
    }
});


const pickerStyle = {
    inputIOS: {
        fontSize: 19,
        backgroundColor: 'red',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 19,
        backgroundColor: 'red',
        color: 'black',
    },
    viewContainer: {
        paddingTop: 0,
        backgroundColor: 'white'
    }
};

const mapStateToProps = ({ tareasReducer }) => {
    const initialValues = {
        name: '',
        status: ''
    };
    const { loading } = tareasReducer;
    return { loading, tareasReducer, initialValues };
};

export default connect(mapStateToProps)(FormEdit);
