
import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TouchableHighlight, Linking } from 'react-native';

class card extends PureComponent {
    onPressCard = () => {
        this.props.navigation.navigate("Editar", this.props.item);
    }

    render() {
        const { item } = this.props;
        const { container, card, header, title, containerTitle, statusCircle, toBlinkCenter,
            locationView, textLocation, body, subtitle } = styles;
        var dateFormat = require('dateformat');
        var cdate = new Date(parseInt(item.createdDate));
        var createdDate = dateFormat(cdate, "dd/mm/yyyy, h:MM TT");
        var udate = item.updateDate ?
            new Date(parseInt(item.updateDate))
            : null;
        var updateDate = dateFormat(udate, "dd/mm/yyyy, h:MM TT");

        return (
            <View style={container}>
                <TouchableHighlight onPress={this.onPressCard}>
                    <View style={card}>
                        <View style={header}>
                            <View style={containerTitle}>
                                <Text style={title}>{item.name}</Text>
                            </View>
                            <View style={statusCircle}>
                                <View style={[toBlinkCenter, {
                                    backgroundColor: item.status === 1
                                        ? '#7ED321'
                                        : item.status === 2
                                            ? '#4A90E2'
                                            : '#F65656'
                                }]} />
                            </View>
                        </View>
                        <View style={body}>
                            <Text style={subtitle}>Estatus: </Text>
                            <Text>{
                                item.status === 1 ? ' Activo'
                                    : item.status === 2 ? ' Completado'
                                        : item.status === 3 ? ' Cancelado' : null
                            }
                            </Text>
                        </View>
                        <View style={body}>
                            <Text style={subtitle}>Fecha de creación: </Text>
                            <Text>{createdDate}</Text>
                        </View>
                        {
                            (udate) ?
                                <View style={body}>
                                    <Text style={subtitle}>Fecha de actualización: </Text>
                                    <Text>{updateDate}</Text>
                                </View>
                                : null
                        }
                        <View style={locationView}>
                            <Text style={subtitle}>Ubicación: </Text>
                            <TouchableOpacity onPress={() =>
                                Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + item.location)}>
                                <Text style={textLocation}>{item.location}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableHighlight>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5
    },
    containerTitle: {
        flex: 1,
        flexDirection: 'column',
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
        marginBottom: 5
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    statusCircle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toBlinkCenter: {
        width: 14,
        height: 14,
        borderRadius: 7
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    locationView: {
        flexDirection: 'row',
    },
    textLocation: {
        textDecorationLine: 'underline',
        color: 'blue'
    },

});

export default card;
