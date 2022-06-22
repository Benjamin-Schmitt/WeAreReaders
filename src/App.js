import './App.css';
import React from 'react'
import { useState } from "react";
import { SearchBooks } from './components/search.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Start } from './components/start';
import { Publisher } from './components/publish.jsx';
import { MyList } from './components/myList.jsx';
import { BooksContextProvider } from './contexts/BooksContext.jsx';



function App(props) {
  return (
     <BooksContextProvider>
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
     </BooksContextProvider>
  );
}
export default App;

