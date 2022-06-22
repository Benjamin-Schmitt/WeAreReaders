import './App.css';
import React from 'react'
import { useState } from "react";
import { SearchBooks } from './search.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Start } from './start';
import { Publisher } from './publish.jsx';
import { MyList } from './myList.jsx';



function App(props) {
  return (
    <Router> 
      <div className="App">  
        <Routes>
          <Route path="*" element={<Start />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/reader" element={<SearchBooks />} />
          <Route path="/reader/mylist" element={<MyList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

