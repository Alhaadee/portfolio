import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Home />}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="my-work" element={<Portfolio/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
