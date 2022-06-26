import { createContext, useState } from 'react';

const BooksContext = createContext();

function BooksContextProvider(props) {
  const [booksList, setBooksList] = useState([]);
  console.log(booksList)  
    return (
        <BooksContext.Provider value={{booksList, setBooksList}}>
         {/*wrapping all components from App.js */}
         {props.children}
        </BooksContext.Provider>
      );
    }
    export { BooksContext, BooksContextProvider };