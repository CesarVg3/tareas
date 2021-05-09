import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import New from '../Screens/NewTarea';
import Edit from '../Screens/Edit';

// Creamos el stack y añadimos solo las 3 vistas que utilizaremos.
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
                name="Nueva"
                component={New}
            />
            <Stack.Screen
                name="Editar"
                component={Edit}
            />
        </Stack.Navigator>
    );
}

export default RootStack;