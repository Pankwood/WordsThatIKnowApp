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
      <p>version 0.6.{process.env.VERSION}</p>
    </FooterBase>
  );
}

export default Footer;
