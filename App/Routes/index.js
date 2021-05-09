import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import Home from '../Screens/Home';
import New from '../Screens/NewTarea';
import Edit from '../Screens/Edit';

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="New"
                component={New}
            />
            <Stack.Screen
                name="Edit"
                component={Edit}
            />
        </Stack.Navigator>
    );
}

export default RootStack;