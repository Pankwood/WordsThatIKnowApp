import React from "react";
import BannerMain from "../../components/BannerMain";
import data from "../../data/data.json";
import CheckWords from "../../components/CheckWords";
import PageDefault from "../../components/PageDefault";

function Home() {

  return (
    <PageDefault>
      <BannerMain
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
        videoDescription={"Let's figure it out right now!"}
      />
      <CheckWords />
    </PageDefault>
  );
}

export default Home;
