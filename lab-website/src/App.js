// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './code/Home.js'
import People from './code/People.js'
import Publication from './code/Publication.js'
import Artifact from './code/Artifact.js'
import Workwithus from './code/Workwithus.js'
import Research from './code/Research.js'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="react-gh-pages">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/People" element={<People />} />
      <Route path="/Research" element={<Research />} />
      <Route path="/Publication" element={<Publication />} />
      <Route path="/Artifact" element={<Artifact />} />
      <Route path="/Workwithus" element={<Workwithus />} />
    </Routes>
  </Router>
  );
}

export default App;
