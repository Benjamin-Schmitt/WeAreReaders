import { createContext, useState } from 'react';

const BooksContext = createContext();

function BooksContextProvider(props) {
  const [booksList, setBooksList] = useState([]);
    return (
        <BooksContext.Provider value={{booksList, setBooksList}}>
         {props.children}
        </BooksContext.Provider>
      );
    }
    export { BooksContext, BooksContextProvider };