import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TareasList from '../Tareas';

class Home extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        // En la vista principal se le agregó un botón para crear tarea
        navigation.setOptions({
            headerRight: () => this.headerRight()
        });
    }

    headerRight = () => (
        <TouchableOpacity
            style={styles.tab}
            onPress={this.onPressNew}
        >
            <Text>Nueva</Text>
        </TouchableOpacity>
    );

    onPressNew = () => {
        // Navegación a otra vista
        this.props.navigation.navigate("Nueva");
    }

    render() {
        return (
            <SafeAreaView style={Colors.darker}>
                <TareasList
                    tareas={this.props.tareas}
                    navigation={this.props.navigation}
                />
            </SafeAreaView>
        );
    }
};

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
    const { tareas } = tareasReducer;

    return { tareas };
};

export default connect(mapStateToProps)(Home);