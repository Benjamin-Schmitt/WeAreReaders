import React, { useState } from 'react'

export function NavBar(props) {
    return (
        <div className="navbar">  
            <div className="navButton">
                <div className="navi"></div>
                <div className="navi"></div>
                <div className="navi"></div>
                <div className="navi"></div>                
            </div>
            <div className="dropdown-content">
                <a href="#">My Account</a>
                <a href="#">My Books</a>
                <a href="#">Authors</a>                       
            </div>        
        </div>       
        )
}
