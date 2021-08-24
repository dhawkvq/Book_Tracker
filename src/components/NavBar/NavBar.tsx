import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navBar.css'

export const NavBar: FC = () => {
    const { pathname } = useLocation()
    return (
        <div className='navBar'>
            <NavLink to='/'><h1>Shelf</h1></NavLink>
            <NavLink to={ pathname === '/' ? '/search': '/'}>
                { pathname === '/'? 'Search' : 'Home' }
            </NavLink>
        </div>
    )
}
