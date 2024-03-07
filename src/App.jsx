import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Loadingscreen from "./pages/LoadingScreen/Loadingscreen";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { LoadingContext } from "./context/context";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <section className="all_wrapper">
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {loading ? (
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        ) : (
          <Loadingscreen />
        )}
      </LoadingContext.Provider>
    </section>
  );
}

export default App;
