import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.jsx';

export function DisplayUser() {
    const { User } = useContext(UserContext);
    return (
        <div>
            <div className="user-data-outer">
                <img className="user-img" src={User.img} alt={User.name} />
                
                <div className="user-data-inner">
                    <div className="user-data-label">Name: {User.name} </div>
                    <div className="user-data-label">Email: {User.email} </div>
                    <div className="user-data-label">ID: {User.id} </div>
                </div>
            </div>

        </div>
    );
}