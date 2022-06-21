import React, { useState } from 'react'

export function Start() {
    return(
        <div className="start">
            <h1>We Are Readers</h1>
            <label>publish, buy, read, sell, resell</label><br />
            <button className="starter">I am a reader</button>
            <button className="starter">I am a publisher</button>
        </div>
    )
}