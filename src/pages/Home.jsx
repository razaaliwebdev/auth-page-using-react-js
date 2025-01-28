import React from "react";

import Navbar from "../components/Navbar";
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="bg-linear-to-r h-screen from-indigo-500 to-pink-300">
      <Navbar />
      <Header/>
    </div>
  );
};

export default Home;
