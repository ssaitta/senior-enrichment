import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function Navigation(props){
    return(
        <div className="nav-bar">
            <Link className='nav-item' to='/campuses'>Campus</Link>
            <Link className='nav-item' to='/students'>Students</Link>
        </div>
    )
}