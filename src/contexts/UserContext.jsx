import { createContext, useState } from 'react';

const UserContext = createContext();

function UserContextProvider(props) {
  const [User, setUser] = useState({
        name : "Ben",
        email : "email@gmail.com",
        password : "123",
        id : 1,
        img : 'UserOne.png',
  }); 
    return (
        <UserContext.Provider value={{User, setUser}}>
         {/*wrapping all components from App.js */}
         {props.children}
        </UserContext.Provider>
      );
    }
    export { UserContext, UserContextProvider };