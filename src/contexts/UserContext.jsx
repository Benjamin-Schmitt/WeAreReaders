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
        data: ['hello', '321'],
    },
    {
        name : "John",
        email : "john@mail.com",
        password : "123",
        id : 1,
        img : 'UserTwo.png',
        data: ['test', '123'],
    },
]); 
    return (
        <UserContext.Provider value={{User, setUser}}>
         {props.children}
        </UserContext.Provider>
      );
    }
    export { UserContext, UserContextProvider };