import React, { useState } from 'react'

export function Start() {
    return(
        <div className="start">
            <h1>We Are Readers</h1>
            <label>publish, buy, read, sell, resell</label><br />
            <button className="starter"><a href="/reader">I am a reader</a></button>
            <button className="starter"> <a href="/publisher">I am a publisher</a></button>
        </div>
    )
}