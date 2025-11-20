import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <Services />
      <Projects/>
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
