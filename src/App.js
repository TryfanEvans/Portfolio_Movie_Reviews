import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './components/store.js'
import FeaturedList from './components/featuredList.js'
import FeaturedMain from './components/featuredMain.js'
import SearchResults from './components/searchResults.js'
import { Provider, useSelector } from "react-redux";

function App() {
  const firstSearch = useSelector((state) => state.search[0]);

  return (
   
      <div className="App">
        <Navbar />
        <div className="Wedge" />
        {firstSearch ? (
          <SearchResults />
        ) : (
          <div className="Featured">
            <FeaturedList />
            <FeaturedMain />
          </div>
        )}
      </div>
  
  );
        }
export default App;
