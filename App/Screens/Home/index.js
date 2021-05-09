import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView, Text, StyleSheet, TouchableOpacity,
    Button,
    View, Dimensions
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TareasList from '../Tareas';

class Home extends Component {
    state = {
        index: 1
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            headerRight: () => this.headerRight()
        });
    }

    headerRight = () => (
        <TouchableOpacity
            style={styles.tab}
            onPress={this.onPressNew}
        >
            <Text>New</Text>
        </TouchableOpacity>
    );

    onPressNew = () => {
        this.props.navigation.navigate("New");
    }

    renderTabs = () => {
        const { tabFilter, tabView } = styles;
        return (
            <View style={tabFilter}>
                <View style={tabView}>
                    <Button onPress={() => this.setState({ index: 1 })} title="Activo" />
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
        return (
            <SafeAreaView style={Colors.darker}>
                {this.renderTabs()}
                <TareasList
                    tareas={this.props.tareas}
                    navigation={this.props.navigation}
                    index={this.state.index}
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
    },
    tabFilter: {
        paddingHorizontal: 15,
        paddingTop: 15,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'center'
    },
    tabView:{
        flexDirection: 'column',
        flex: 1, 
        paddingHorizontal: 5
    }
});

const mapStateToProps = ({ tareasReducer }) => {
    const { tareas } = tareasReducer;

    return { tareas };
};

export default connect(mapStateToProps)(Home);