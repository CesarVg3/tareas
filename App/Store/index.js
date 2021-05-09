import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './reducers';

const config = {
    timeout: 0,
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userApp']
};

const pReducer = persistReducer(config, reducers);
const enhancers = [applyMiddleware(thunk)];
const persistConfig = { enhancers };
export const store = createStore(pReducer, {}, compose(...enhancers));

const persistor = persistStore(store, persistConfig, () => {
    // console.log(store.getState());
});

const configureStore = () => ({ persistor, store });

export default configureStore;
