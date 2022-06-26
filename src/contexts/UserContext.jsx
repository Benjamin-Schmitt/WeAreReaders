import { createContext, useState } from 'react';

const UserContext = createContext();

function UserContextProvider(props) {
  const [User, setUser] = useState([
    {
        name : "Ben",
        email : "ben@mail.com",
        password : "123",
        id : 0,
        img : 'UserOne.png',
        data: [],
    },
    {
        name : "John",
        email : "john@mail.com",
        password : "123",
        id : 1,
        img : 'UserTwo.png',
        data: [],
    },
]); 
    return (
        <UserContext.Provider value={{User, setUser}}>
         {props.children}
        </UserContext.Provider>
      );
    }
    export { UserContext, UserContextProvider };