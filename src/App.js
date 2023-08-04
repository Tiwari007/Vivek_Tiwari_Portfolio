import './App.css';
import Dashboard from './pages/Dashboard';
import ParticleBackground from './components/ParticleBackground';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import DrawerAppBar from './components/NavigationBar';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <ParticleBackground />
      <div className='App'>
        <DrawerAppBar>
          <Dashboard />
          <Skills />
          <Projects />
          <ContactUs />
        </DrawerAppBar>
      </div>
    </>
  );
}

export default App;
