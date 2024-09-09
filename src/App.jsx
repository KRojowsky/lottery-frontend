import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Rules from "./Components/Rules/Rules";
import Member from "./Components/Member/Member";
import Prizes from "./Components/Prizes/Prizes";
import Contact from "./Components/Contact/Contact";
import Location from "./Components/Location/Location";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Rules />
      <Prizes />
      <Member />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
