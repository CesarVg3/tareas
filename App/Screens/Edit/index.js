import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import GetLocation from 'react-native-get-location'
import FormEdit from './form';
import * as actions from '../../Store/tareas/actions';
import { values } from 'lodash';

class Edit extends Component {
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

        // Se crea el objeto que se mandará a guardar, la fecha de creación no se modifica
        const data = {
            name: values.name,
            status: parseInt(values.status),
            id: values.id,
            createdDate: values.createdDate,
            updateDate: now,
            location: lat + ',' + long
        };

        await this.props.updateTarea(data);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <FormEdit onSubmit={this.onSubmit} params={this.props.route.params} />
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

export default connect(mapStateToProps, actions)(Edit);
