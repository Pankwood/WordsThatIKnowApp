import React from "react";
import BannerMain from "../../components/BannerMain";
import Content from '../../data/Content/content.json';
import CheckWords from "../../components/CheckWords";
import PageDefault from "../../components/PageDefault";
import { LocaleContext } from '../../LocaleContext.js';

function Home() {
  const [locale] = React.useContext(LocaleContext);

  return (
    <PageDefault>
      <div id="marioScreen"></div>
      <BannerMain
        videoTitle={Content.language[locale].Home_title}
        url={Content.language[locale].Home_video}
        videoDescription={Content.language[locale].Home_subtitle}
      />
      <CheckWords />
    </PageDefault>
  );
}

export default Home;
