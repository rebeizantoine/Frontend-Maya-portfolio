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


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projectall />
      <Contact />
      <Footer />


    </div>

  );
}

export default App;