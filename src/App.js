import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Working from "./components/Working";
import Service from "./components/Service";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#245798';
      document.getElementById("checkBox").innerHTML = "Dark ";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById("checkBox").innerHTML = "Light ";
    }
  }

  return (
    <>
     
     
        <Navbar title = "Educational" mode = {mode} toggleMode={toggleMode}/>
        <Home title_first="Experianced Faculty" />
        <Working mode = {mode} /> 
         <Service />
    </>
  );
}

export default App;
