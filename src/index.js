/* eslint-disable react/jsx-filename-extension */
import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './store/appContext';
import {mainReducer} from './store/mainDuck';

const AppContextProvider = () => {
  const [state, dispatch] = useReducer(mainReducer, {
    posts: [],
    users: [],
    activeResource: 'posts',
  });

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <App />
    </AppContext.Provider>
  );
};

ReactDOM.render(<AppContextProvider />, document.getElementById('root'));
