import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Working from "./components/Working";
import Service from "./components/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = '#245798';
      document.getElementById("checkBox").innerHTML = "Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById("checkBox").innerHTML = "Light mode";
    }
  }

  return (
    <>
     
      <BrowserRouter>
        <Navbar title = "Educational" mode = {mode} toggleMode={toggleMode}/>


          <Routes>
            <Route path = "/Home" element = {<Home />} />
            <Route path = "/Working" element = {<Working />} />
            <Route path = "/Service" element = {<Service/>} />
          </Routes>
          {/* <Route path="/Working">
            <Working mode = {mode} /> 
            
          </Route>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/">
            <Home title_first = "Experianced Faculty" />  
          </Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;
