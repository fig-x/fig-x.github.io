// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react"
import Home from './code/Home.js'
import People from './code/People.js'
import Publication from './code/Publication.js'
import Artifact from './code/Artifact.js'
import Workwithus from './code/Workwithus.js'
import Research from './code/Research.js'
import Navigator from "./code/Navigator.js";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer
 from "./code/Footer.js";
function App() {
  // console.log(process.env.PUBLIC_URL)
  useEffect(() => {
    document.title = "FIG. 1 Lab"
  }, [])
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="/People" element={<People />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/Artifact" element={<Artifact />} />
        <Route path="/Workwithus" element={<Workwithus />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
