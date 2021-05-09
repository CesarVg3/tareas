import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = props => {
    const { children, disabled, onPress } = props;
    const {
        buttonStyle, textStyle, buttonContainer, disabledStyle,
    } = styles;

    return (
        <TouchableOpacity
            {...props}
            onPress={onPress}
            style={[buttonStyle, disabled ? disabledStyle : {}]}
        >
            <View style={buttonContainer}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    iconLeftStyle: {
        marginRight: 12
    },
    iconRightStyle: {
        marginLeft: 12
    },
    disabledStyle: {
        backgroundColor: '#9B9B9B'
    }
});

export { Button };
