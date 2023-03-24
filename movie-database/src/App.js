import "./App.css";
/**
 * Import Component Hello
 */
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import Hello from "./components/Hello";

function App() {
  return (
    <div>
      {/* <h2>This is Create React App</h2> */}

      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
