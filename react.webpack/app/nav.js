import React from 'react'
import {
    NavLink
} from 'react-router-dom'
import './nav.css'

// exact表示精确匹配

let NavBar = () => (
    <div>
        <div>
            <NavLink exact className="blue" to="/" >load</NavLink> | 
            <NavLink to="/b" style={{color:'red',fontSize:'33px'}}>loadb</NavLink> | 
            <NavLink to="/c" activeClassName="green">loadc</NavLink> |  
            <NavLink to="/react" activeClassName="active">404页面</NavLink> |  
            <NavLink to="/redirect" activeClassName="active">404页面Redirect</NavLink> 
        </div>
    </div>        
)

export default NavBar