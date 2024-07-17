// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react"
import Home from './main/Home.js'
import People from './main/People.js'
import Publication from './main/Publication.js'
import Artifact from './main/Artifact.js'
import Workwithus from './main/Workwithus.js'
import Research from './main/Research.js'
import Navigator from "./code/Navigator.js";
import Footer from "./code/Footer.js";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'; 

function App() {
  // console.log(process.env.PUBLIC_URL)
  useEffect(() => {
    // document.title = "FIGX Research Lab"
  }, [])
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/artifact" element={<Artifact />} />
        <Route path="/workwithus" element={<Workwithus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
