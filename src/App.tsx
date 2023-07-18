import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main className="container mx-auto">
        <About />
        <Projects />
        {/* <Contact /> */}
      </main>
    </div>
  );
};

export default App;
