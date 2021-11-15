import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';
import Routes from './routes';
import store, { persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <AppProvider>
            <Routes />
          </AppProvider>
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
