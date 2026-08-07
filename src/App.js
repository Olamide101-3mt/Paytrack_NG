import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AppMockUp from './components/AppMockUp';
import Features from './components/Features';


function App() {
  return (
    <body style={{ background: "#060A14", color: "#E8EAF0"}}> 
      <Navbar />
      <HeroSection />
      <AppMockUp /> 
      <Features />
    </body>
  );
}

export default App;
