import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingButton = props => {
    const { buttonStyle } = styles;

    return (
        <View style={buttonStyle} >
            <ActivityIndicator size={20} color={'white'} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#2188FC',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        overflow: 'hidden',
        borderRadius: 2,
    }
});

export { LoadingButton };
