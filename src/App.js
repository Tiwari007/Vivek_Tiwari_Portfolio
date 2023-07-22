import './App.css';
import Dashboard from './pages/Dashboard';
import ParticleBackground from './components/ParticleBackground';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import DrawerAppBar from './components/NavigationBar';
// import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
    {/* <AnimatedCursor innerSize={12}
          outerSize={12}
          color='255, 255, 255'
          outerAlpha={0.5}
          innerScale={0.7}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]} /> */}
      <ParticleBackground />
      <div className='App'>
        <DrawerAppBar>
          <Dashboard />
          <Skills />
          <Projects />
          {/* <Footer /> */}
          <ContactUs />
        </DrawerAppBar>
      </div>
    </>
  );
}

export default App;
