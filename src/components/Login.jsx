import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext.jsx';

export function DisplayUser() {
    const { User } = useContext(UserContext);
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');
    const [hold, setHold] = useState('0');

    const switchUserAccordingToId = (e) => {
        e.preventDefault();
        console.log(email, password)
        if (email === User[0].email && password === User[0].password) {
            return (setHold(0), console.log(email, password, hold));
        } else if (email === User[1].email && password === User[1].password) {
            return (setHold(1), console.log(email, password, hold));
        }
    }

    return (
        <div className="login-outer">            
            <div className="user-data-outer">
                
                <img className="user-img" src={User[hold].img} alt={User[hold].name} />
                
                <div className="user-data-inner">
                    <div className="user-data-label">Name: {User[hold].name}</div>
                    <div className="user-data-label">Email: {User[hold].email}</div>
                    <div className="user-data-label">ID: {User[hold].id}</div>
                </div>

                <div>
                    <form className="login-field" onSubmit={switchUserAccordingToId}>
                        <input 
                        type="text" 
                        placeholder="Email" 
                        onChange={e => {
                            return setEmail(e.target.value)
                        }}
                        />

                        <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                        />
                        <button className="login-button">Login</button>
                    </form>
                </div>

                

            </div>
        </div>
    );
}