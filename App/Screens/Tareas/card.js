
import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform, Text, TouchableHighlight } from 'react-native';

class card extends PureComponent {
    onPressCard = () => {
        console.log("$ abrir tarjeta", this.props.item.id);
    }

    render() {
        const { item } = this.props;
        const { container, card, header, title, containerTitle, statusCircle, toBlinkCenter } = styles;

        console.log("$ itemms", item);
        var cdate = new Date(parseInt(item.createdDate)).toLocaleString();
        var udate = item.updateDate ?
            new Date(parseInt(item.updateDate)).toLocaleString()
            : null;

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
                                        ? 'green'
                                        : item.status === 2
                                            ? 'blue'
                                            : 'red'
                                }]} />
                            </View>
                        </View>
                        <Text>Estatus: {
                            item.status === 1 ? ' Activo'
                                : item.status === 2 ? ' Completado'
                                    : item.status === 3 ? ' Cancelado' : null
                        }
                        </Text>
                        <Text>Fecha de creación: {cdate}</Text>
                        {
                            (udate) ?
                                <Text>Fecha de actualización: {udate}</Text>
                                : null
                        }
                        <Text>Ubicación: {item.location}</Text>
                    </View>
                </TouchableHighlight>
            </View>
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
    },
    title: {
        fontSize: 18,
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
});

export default card;
