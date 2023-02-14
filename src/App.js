// import logo from './logo.svg';
import './App.css';
import Home from './Mycomponents/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import ProjectNAv from './Mycomponents/projectNav';
import About from './Mycomponents/About';
import Description from './Mycomponents/Description';
import IndivProject from './Mycomponents/IndivProject.jsx';
import ProjectNavAdmin from './Mycomponents/ProjectNavAdmin';
// import Button from 'react-bootstrap/Button';


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectNAv />} />
        <Route path='/about' element={<About />} />
        <Route path='/indivproject' element={<IndivProject />} />
        <Route path='/adminproject' element={<ProjectNavAdmin/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
