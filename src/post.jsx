import React, {useState, useEffect} from 'react'
import axios from 'axios'


    let url = "https://myServer.com"
    let options = {
        method: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            property_1: value,
            property_2: value
        }
    };
