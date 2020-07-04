import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'

import store from './components/store.js'
import {Provider} from 'react-redux';
import FeaturedList from './components/featuredList.js'
import FeaturedMain from './components/featuredMain.js'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Navbar /> 
      <div className = "Wedge" />
      <div className = 'Featured'>
      <FeaturedList />
      <FeaturedMain />
      </div>
    </div>
    </Provider>
  );
}

export default App;
