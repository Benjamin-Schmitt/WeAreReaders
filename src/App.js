import './App.css';
import { Search } from './search.jsx';
import { QueryOpenLibrary } from './search.jsx';

function App() {
  return (
    <div className="App">
      <Search />
      <QueryOpenLibrary />


      {/* <div className="area" >                    
                  <ul className="circles">                                   
                          <li></li>
                          <li></li>                          
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                  </ul>
          </div > */}
    </div>
  );
}

export default App;