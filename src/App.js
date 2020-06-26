import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import Posts from './components/Posts';
import Postform from './components/Postform';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
         
          <p>
            React Redux Example
          </p>
          
        </header> 
        <Postform/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
