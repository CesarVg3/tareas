import React, { Component } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import Card from './card';

export default class TareasList extends Component {
    state = {
        index: 0
    }

    componentDidMount() {
        this.setState({ index: this.props.index });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.index !== this.props.index) {
            this.setState({ index: this.props.index });
        }
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => {
        return (
            <Card
                item={item}
                navigation={this.props.navigation}
            />
        )
    };

    render() {
        const { tareas, index } = this.props;
        const { container, sectionListStyle } = styles;
        var filtered = [];
        for (var i = 0; i < tareas.length; i++) {
            if (tareas[i].status == index) {
                filtered.push(tareas[i]);
            }
        }

        return (
            <View style={container}>
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
        ...Platform.select({
            ios: {
                overflow: 'visible'
            }
        })
    }
});
