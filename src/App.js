import './App.css';
import { SearchBooks } from './components/Search.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Start } from './components/Start';
import { Publisher } from './components/Publish.jsx';
import { MyList } from './components/MyList.jsx';
import { Test } from './components/Test.jsx';
/* import { NavBar } from './components/Navbar.jsx'; */
import { DisplayUser } from './components/Login.jsx';

/* import contexts */
import { BooksContextProvider } from './contexts/BooksContext.jsx';
import { UserContextProvider } from './contexts/UserContext.jsx';


/* import firebase, imported to display firebase object in console.log */
import firebase from "./firebase";



function App() {
  return (
<UserContextProvider>
     <BooksContextProvider>
        <Router>
          <div className="App">
            <DisplayUser />
            <Routes>
              <Route path="*" element={<Start color={'black'} />} />
              <Route path="/publisher" element={<Publisher />} />
              <Route path="/reader" element={<SearchBooks />} />
              <Route path="/reader/mylist" element={<MyList />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </Router>
      </BooksContextProvider>
     </UserContextProvider>
  );
}
export default App;