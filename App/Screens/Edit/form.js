import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { validate } from './validate';

class FormEdit extends Component {

    renderButton = (handleSubmit, errors) => {
        var disabledBtn = Object.keys(errors).length == 0 ? false : true;
        return (
            <Button onPress={handleSubmit} title="Guardar" disabled={disabledBtn} />
        );
    };

    render() {
        const { inputStyle, inputContainer, buttonStyle } = styles;
        const options = [
            { value: '1', label: 'Activo' },
            { value: '2', label: 'Completado' },
            { value: '3', label: 'Cancelado' },
        ];
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
                                    <Text>Ubicación: {values.location}</Text>
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
    return { tareasReducer, initialValues };
};

export default connect(mapStateToProps)(FormEdit);
