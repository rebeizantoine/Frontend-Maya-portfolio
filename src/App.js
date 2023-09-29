import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import About from './components/About';
import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/Header';
import Hero from './components/Hero'
import Projectall from './components/projectall';
import Skills from './components/skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project1 from './components/project1/index1';
import Project2 from './components/project2/index2';
import Project3 from './components/project3/index3';
import Project4 from './components/project4/index4';
import Project5 from './components/project5/index5';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Routes>
          <Route extact path="/" element={<Projectall />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
