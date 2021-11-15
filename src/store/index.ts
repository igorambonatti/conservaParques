import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FormListState } from './ducks/formList/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  formList: FormListState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
  whiteList: [],
};

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);


export default store;
