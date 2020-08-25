import React from 'react';
import { FooterBase } from './styles'


function Footer() {
  return (
    <FooterBase>
      <p>
        © 2020 The Words That I Know -        {' '}
        <a href="https://github.com/Pankwood/" target="_blank" rel="noopener noreferrer">
          Dan Debiazi
        </a>
      </p>
      <p>version 0.8.{process.env.REACT_APP_GIT_SHA}</p>
    </FooterBase>
  );
}

export default Footer;
