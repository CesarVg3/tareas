import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import GetLocation from 'react-native-get-location'
import Form from './form';
import * as actions from '../../Store/tareas/actions';

class New extends Component {
    onSubmit = async (values) => {
        // La fecha se generará en milisegundos
        const now = new Date().getTime();
        let lat = '';
        let long = '';

        // Obtenemos las coordenadas
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true
        }).then(location => {
            lat = location.latitude;
            long = location.longitude;
        }).catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        });

        // Se crea el objeto que se mandará a guardar
        const data = {
            name: values.name,
            status: parseInt(values.status),
            // El id es "temporal", este se tomaría de la BD
            id: Math.floor(Math.random() * (1000 - 10)) + 10,
            createdDate: now,
            location: lat + ',' + long
        };

        this.props.saveTarea(data);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <Form onSubmit={this.onSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        paddingRight: 15,
        flex: 1,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = ({ tareasReducer }) => {

    return { tareasReducer };
};

export default connect(mapStateToProps, actions)(New);
