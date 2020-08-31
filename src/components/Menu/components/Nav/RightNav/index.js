import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LocaleContext } from '../../../../../LocaleContext.js';

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
  const [locale, setLocale] = React.useContext(LocaleContext);
  const nextLocale = locale === 0 ? 1 : 0;
  return (
    <>
      <Ul open={open}>
        <li>
          <Link className="RightNav" to="/"> Home</Link>
        </li>
        <li>
          <Link className="RightNav" to="/contact"> Contact</Link>
        </li>
      </Ul>
      <button style={{ color: "black" }} onClick={() => setLocale(nextLocale)}>
        Change language to {nextLocale}
      </button>
    </>
  )
}

export default RightNav