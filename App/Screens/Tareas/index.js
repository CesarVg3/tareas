import React, { Component } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import Card from './card';

export default class TareasList extends Component {

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <Card
            item={item}
            navigation={this.props.navigation}
        />
    );

    render() {
        const { tareas } = this.props;
        const { container, sectionListStyle } = styles;

        return (
            <View style={container}>
                <FlatList
                    data={tareas}
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
        ...Platform.select({
            ios: {
                overflow: 'visible'
            }
        })
    }
});
