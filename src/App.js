import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route path="/event" component={Event} /> 
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </BrowserRouter>
  );
}

export default App;
