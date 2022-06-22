import React, { useState } from 'react';

export function Publisher(props) {
    return ( 
        <div className="publisher">
            <h1>Publisher</h1>
              
            <p>
                At We Are Readers, independant publishers are free to publish their works and sell their books.
            </p>

            <h2>Check out or pricing models</h2>
            <div className="prices">
                <div className="pricing"></div>
                <div className="pricing"></div>
                <div className="pricing"></div>
            </div>
        </div>
      )
}