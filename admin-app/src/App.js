import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "./App.css";
import SignUp  from "./Containers/SignUp";
import Home from "./Containers/Home";
import SignIn from "./Containers/SignIn";



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
