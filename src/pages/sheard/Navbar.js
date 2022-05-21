import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1 ">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>about</NavLink></li>
                    <li><NavLink to={'/concat'}>concat</NavLink></li>
                    <li><NavLink to={'/Login'}>Login</NavLink></li>
                 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;