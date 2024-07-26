import React from "react";
import Navbar from "../components/Navbar";
import DisplayScroll from "../components/DisplayScroll";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Bulletin from "../components/Bulletin";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <DisplayScroll />
      <Navbar />
      <Slider />
      <Categories />
      <Bulletin />
      <Footer />
    </div>
  );
};

export default Home;
