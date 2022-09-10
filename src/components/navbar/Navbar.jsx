import React, { Fragment, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';
import logo from '../../assets/esj-7-logo.png';
import { NavLink } from 'react-router-dom';
import { useToggle } from '../../contexts/ToggleContext';
import { useSearch } from '../../contexts/SearchContext';

const Menu = () => {
    return (
        <>
            <NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? "#fff" : "#ee9800" })}>
                <span>Películas</span>
            </NavLink>
            <NavLink to={"tvshows"} style={({ isActive }) => { return { color: isActive ? "#fff" : "#ee9800" } }}>
                <span>Tv shows</span>
            </NavLink>
            <NavLink to={"trends"} style={({ isActive }) => { return { color: isActive ? "#fff" : "#ee9800" } }}>
                <span>Tendencias</span>
            </NavLink>
            <NavLink to={"subcriptions"} style={({ isActive }) => { return { color: isActive ? "#fff" : "#ee9800" } }}>
                <span>Subcripción</span>
            </NavLink>
        </>
    )
}


export const Navbar = () => {

    const { toggle, setToggle } = useToggle();
    const { setValueSearch } = useSearch();
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <Fragment>
            <nav id={toggle ? "" : "navBarColor"}>
                <div className="nav-options">
                    <NavLink to={"/"} >
                        <img src={logo} />
                    </NavLink>
                    <Menu />
                </div>
                <div className="input-group">
                    <input type={"text"} placeholder="Busque lo que desea..." onChange={(e) => setValueSearch(e.target.value)} />
                    <HiSearch size={21} id="search" color={toggle ? "black" : "#ff206e"} />
                    <div id="color-switch" onClick={() => setToggle(!toggle)}>
                        <div id={toggle ? "color-switch-move" : "color-switch-moved"}>

                        </div>
                    </div>
                </div>
                <div className="gpt3-navbar-menu">
                    {
                        toggleMenu
                            ? (<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />)
                            : (<RiMenu2Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />)
                    }
                    {
                        toggleMenu && (
                            <div className="gpt3-navbar-menu-container scale-up-center" >
                                    <div id="color-switch" onClick={() => setToggle(!toggle)}>
                                        <div id={toggle ? "color-switch-move" : "color-switch-moved"}>

                                        </div>
                                    </div>
                                <div className="toggleMenu-menu-container">
                                    <Menu />
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </Fragment>
    )
}
