import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    Colors,
    Header,
    LearnMoreLinks
} from 'react-native/Libraries/NewAppScreen';
import TareasList from '../Tareas';


class Home extends Component {
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

    render() {
        return (
            <SafeAreaView style={Colors.darker}>
                <TareasList tareas={this.props.tareas} />
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