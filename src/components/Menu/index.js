import React from 'react';
import Logo from '../../assets/img/Logo.gif';
import './Menu.css';
import ButtonLink from './components/ButtonLink';


function Menu(params) {
    return(
        <nav className='Menu'>
            <a href='/'>
<img className='Logo' src={Logo} alt='Logo Words That I Know' />

            </a>
            <ButtonLink className='ButtonLink' href='/'>
                Novo Video
            </ButtonLink>
        </nav>
    )
}

export default Menu;