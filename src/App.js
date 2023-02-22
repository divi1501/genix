// import logo from './logo.svg';
import './App.css';
import Home from './Mycomponents/Home.jsx';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Mycomponents/Header.jsx';
import Footer from './Mycomponents/Footer.jsx';
import ProjectNAv from './Mycomponents/projectNav.jsx';
import About from './Mycomponents/About.jsx';
import Description from './Mycomponents/Description.jsx';
import IndivProject from './Mycomponents/IndivProject.jsx';
import ProjectNavAdmin from './Mycomponents/ProjectNavAdmin.jsx';
import Register from './Mycomponents/register.jsx';
import Login from './Mycomponents/Login.jsx';
// import Button from 'react-bootstrap/Button';
let user = localStorage.getItem('user')

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectNAv />} />
        <Route path='/about' element={<About />} />
        <Route path='/indivproject' element={<IndivProject />} />
        <Route path='/adminproject' element={<ProjectNavAdmin />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
