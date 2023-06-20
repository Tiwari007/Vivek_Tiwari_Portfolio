import './App.css';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import ParticleBackground from './components/ParticleBackground';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
    <ParticleBackground />
    <div className='App'>
      <Layout>
        <Dashboard />
        <Skills />
        <Projects />
      </Layout>
    </div>
    </>
  );
}

export default App;
