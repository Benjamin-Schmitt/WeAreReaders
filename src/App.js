import './App.css';
import React from 'react'
import { SearchBooks } from './components/Search.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Start } from './components/Start';
import { Publisher } from './components/Publish.jsx';
import { MyList } from './components/MyList.jsx';
import { BooksContextProvider } from './contexts/BooksContext.jsx';


function App() {
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