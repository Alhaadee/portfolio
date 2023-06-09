import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MyWork from "./components/myWork/MyWork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Layout />}> 
        <Route index element={<Home />}/>
        <Route path="/portfolio/about" element={<About/>}/>
        <Route path="/portfolio/contact" element={<Contact/>}/>
        <Route path="/portfolio/my-work" element={<MyWork/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
