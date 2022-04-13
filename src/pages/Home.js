import React from "react";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
// import NavbarPublic from "../components/Navbar/Onlynavbar";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <NavbarAdmin />
      {/* <NavbarPublic /> */}
      <Hero />
    </>
  );
}

export default Home;
