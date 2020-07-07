import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { SongContextProvider } from './context/songContext';
import { AuthContextProvider } from './context/authContext';

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <SongContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode> 
      </SongContextProvider>
    </AuthContextProvider>
  </Provider>,
  document.getElementById('root')
);

