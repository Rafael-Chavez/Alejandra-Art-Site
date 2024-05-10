import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <main>
                <Gallery />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
