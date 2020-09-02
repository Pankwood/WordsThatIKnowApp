import React from 'react';
import { FooterBase } from './styles'
import { LocaleContext } from '../../LocaleContext';
import Content from '../../data/Content/content.json';


function Footer() {
  const [locale] = React.useContext(LocaleContext);
  return (
    <FooterBase>
      <p>
        © 2020 The Words That I Know -        {' '}
        <a href="https://github.com/Pankwood/" target="_blank" rel="noopener noreferrer">
          Dan Debiazi
        </a>
      </p>
      <p>{Content.language[locale].Footer_version} 0.2.{process.env.REACT_APP_GIT_SHA}</p>
    </FooterBase>
  );
}

export default Footer;
