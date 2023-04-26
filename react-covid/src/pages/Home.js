import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Globals from "../components/Globals";
import indonesia from "../utils/constants/indonesia";
import { useState } from "react";
import Provinces from "../components/Provinces";
import AddCovidForm from "../components/AddCovidForm";

function Main() {
  const globals = useState(indonesia);
  return (
    <main>
      <Hero />
      <Globals globals={globals} />
      <Provinces />
      <AddCovidForm />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
