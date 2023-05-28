import React from "react";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Checkboxes from "./Checkboxes";
import Hero from "./Hero";
import Inputs from "./Inputs";
import Loaders from "./Loaders";
// import Stat from "./Stat";
import Toggle from "./Toggle";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      {/* <Stat /> */}
      <Buttons />
      <Loaders />
      <Checkboxes />
      <Toggle />
      <Inputs />
      <Cards />
    </div>
  );
}

export default Home;
