import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Button, Dimensions } from 'react-native';
import Card from './card';

export default class TareasList extends Component {
    state = {
        index: 1
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => {
        // Elemento que añadiremos por cada item de tareas
        return (
            <Card
                item={item}
                navigation={this.props.navigation}
            />
        )
    };

    renderTabs = () => {
        // Son los botones para filtrado
        const { tabFilter, tabView, styleBtn } = styles;
        return (
            <View style={tabFilter}>
                <View style={tabView}>
                    <Button style={styleBtn} onPress={() => this.setState({ index: 1 })} title="Activo" />
                </View>
                <View style={tabView}>
                    <Button onPress={() => this.setState({ index: 2 })} title="Completado" />
                </View>
                {/* Descomentar para mostrar las cnaceladas y editarlas */}
                {/* <View style={tabView}>
                    <Button onPress={() => this.setState({ index: 3 })} title="Cancelado" />
                </View> */}
            </View>
        )
    }

    render() {
        const { tareas } = this.props;
        const { index } = this.state;
        const { container, sectionListStyle } = styles;
        var filtered = [];
        // Se hará un filtro por el status
        // El filtro se hizo aquí ya que no se realizaron "peticiones" a una api
        for (var i = 0; i < tareas.length; i++) {
            if (tareas[i].status == index) {
                filtered.push(tareas[i]);
            }
        }

        return (
            <View style={container}>
                {this.renderTabs()}
                <FlatList
                    data={filtered}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    initialNumToRender={10}
                    style={sectionListStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    sectionListStyle: {
        height: Dimensions.get('window').height * .85
    },
    tabFilter: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10
    },
    tabView: {
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 5,
    },
    styleBtn: {
        borderRadius: 40
    }
});
