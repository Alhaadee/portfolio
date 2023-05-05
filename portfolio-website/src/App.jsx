import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
