import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
