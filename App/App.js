import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Routes';
import configureStore from './Store';

const { persistor, store } = configureStore();

export default class App extends Component {
  render() {
    // Se utilizó @react-navigation para la nevegación
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
};
