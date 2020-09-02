import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'var(--grayLight)' : 'var(--blackLighter)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform .3s ease-in-out;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(405deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-360deg)' : 'rotate(360deg)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-405deg)' : 'rotate(360deg)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger