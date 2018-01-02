import React from 'react'
import {
    NavLink
} from 'react-router-dom'

// exact表示精确匹配

let NavBar = () => (
    <div>
        <div>
            <NavLink exact to="/" >load</NavLink> | 
            <NavLink to="/b" >loadb</NavLink> | 
            <NavLink to="/c" >loadc</NavLink> 
        </div>
    </div>        
)


export default NavBar