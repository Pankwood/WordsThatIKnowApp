import React from 'react';
import Logo from '../../assets/img/Logo.gif';
import './Menu.css';
import Button from '../Button';


function Menu(params) {
    return(
        <nav className='Menu'>
            <a href='/'>
<img className='Logo' src={Logo} alt='Logo Words That I Know' />

            </a>
            <Button as="a" href='/'>
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;