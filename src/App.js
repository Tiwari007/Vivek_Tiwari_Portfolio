import './App.css';
import Dashboard from './pages/Dashboard';
import ParticleBackground from './components/ParticleBackground';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import DrawerAppBar from './components/NavigationBar';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <ParticleBackground />
      <div className='App'>
        <DrawerAppBar>
          <Dashboard />
          <Skills />
          <Projects />
          <Footer />
        </DrawerAppBar>
      </div>
    </>
  );
}

export default App;
