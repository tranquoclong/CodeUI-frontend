import React from "react";
import Hero from "./Hero";
import Stat from "./Stat";
import TopCreate from "./TopCreate";
import TopElement from "./TopElement";
import Supporters from "./Supporters";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Stat />
      <TopCreate/>
      <TopElement/>
      <Supporters />
    </div>
  );
}

export default Home;
