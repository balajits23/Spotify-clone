import React from "react";
import Footer from "./SilderComponent/Footer";
import Slider from "./SilderComponent/Slider";
import SpotifyFree from "./SilderComponent/SpotifyFree";
import SpotifyWrapped from "./SilderComponent/SpotifyWrapped";

const Home = () => {
  return (
    <div>
      <Slider />
      <SpotifyWrapped />
      <SpotifyFree />
      <Footer/>
    </div>
  );
};

export default Home;
