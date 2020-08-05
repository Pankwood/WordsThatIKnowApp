import React from "react";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import data from "./data/data.json";

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
        videoDescription={"O que é o Front-End?"}
      />
      <Carousel ignoreFirstVideo category={data.categories[0]}></Carousel>
      <Carousel category={data.categories[1]}></Carousel>
      <Carousel category={data.categories[2]}></Carousel>
      <Carousel category={data.categories[3]}></Carousel>
      <Footer />
    </div>
  );
}

export default App;
