import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Framework from './components/Framework';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <CanvasBackground />
        <Hero />
        <Framework />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
