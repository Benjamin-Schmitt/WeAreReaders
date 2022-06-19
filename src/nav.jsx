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

               {/*  <div>
                    <a href="#">Let Rob search</a>
                    <img className="img-inline" src="https://img.favpng.com/6/17/22/robotics-stock-photography-graduation-ceremony-png-favpng-dyCu490sipXb4091EXsAU0XDu.jpg"></img>
                </div> */}
                
            </div>        
        </div>       
        )
}
