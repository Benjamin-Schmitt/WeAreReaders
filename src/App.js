import './App.css';
import { SearchBooks } from './search.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Start } from './start';



function App() {
  return (
    <Router> 
      <div className="App">  
        <Routes>
          <Route path="*" element={<Start />} />
          <Route path="/search" element={<SearchBooks />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

