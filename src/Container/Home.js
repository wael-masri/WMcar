import React from "react";
import Guaranteeshome from "../Components/Guaranteeshome/Index";
import Headerhome from "../Components/Headerhome/Index";
import Photocarshome from "../Components/Photocarshome/Index";
import Searchcar from "../Components/Searchcar/Index";
import Bestofferhome from "../Components/Bestofferhome/Index";

import Title from "../Components/Title/Index";
import "./Styles.css";
const Home = () => {
  return (
    <>
      <Headerhome />
      <div className="space"></div>
      <Title
        title="Best Seller"
        subtitle="See our full lineup of vehicles and find the one that best fits you."
      />
       <Bestofferhome />
      <Guaranteeshome />
      <div className="space"></div>
      <Searchcar />
      <Title
        title="Something for Everyone"
        subtitle="See our full lineup of vehicles and find the one that best fits you."
      />
      <Photocarshome />
    </>
  );
};

export default Home;
