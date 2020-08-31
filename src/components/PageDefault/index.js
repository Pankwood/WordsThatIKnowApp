import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";
import { LocaleContext } from '../../LocaleContext.js';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
`;


function PageDefault(params) {
  const [locale] = React.useContext(LocaleContext);

  return (
    <div locale={locale}>
      <Menu />
      <Main>{params.children}</Main>
      <Footer />
    </div>
  );
}

export default PageDefault;
