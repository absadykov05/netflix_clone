import React from "react";
import "./App.scss";
import {Hero} from './Components/Hero/Hero';
import { Header } from "./Components/Header/Header";
import {Home} from './Components/Pages/Home/Home';


function App() {
  return (
      <div className="main">
        <Home/>
      </div>
    );
}

export default App;

