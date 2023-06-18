import './App.css';
import Layout from './Layout';
import Dashboard from './components/Dashboard';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Dashboard />
        <Skills />
      </Layout>
    </div>
  );
}

export default App;
