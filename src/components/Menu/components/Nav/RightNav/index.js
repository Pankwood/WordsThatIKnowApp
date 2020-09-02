import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LocaleContext } from '../../../../../LocaleContext.js';
import flagbr from '../../../../../assets/img/flag-br.svg';
import flagca from '../../../../../assets/img/flag-ca.svg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: inherit;
    font-family: inherit;
  }
  img {
    height: 30px;
    width: auto;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--black);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -10px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


const RightNav = ({ open }) => {
  // eslint-disable-next-line
  const [locale, setLocale] = React.useContext(LocaleContext);

  function handleMouseLeave() {
    localStorage.setItem("language", locale)
  }

  localStorage.setItem("language", locale);
  return (
    <>
      <Ul open={open}>
        <li>
          <Link className="RightNav" to="/"> Home</Link>
        </li>
        <li>
          <Link className="RightNav" to="/contact"> Contact</Link>
        </li>
        <li>
          <img className="RightNav" src={flagca} alt="English" title="English" onClick={() => setLocale(0)} onMouseLeave={handleMouseLeave} />
        </li>
        <li>
          <img className="RightNav" src={flagbr} alt="Português" title="Português" onClick={() => setLocale(1)} onMouseLeave={handleMouseLeave} />
        </li>
      </Ul>
    </>
  )
}

export default RightNav