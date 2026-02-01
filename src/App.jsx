import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './context/TranslationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';

function App() {
    return (
        <TranslationProvider>
            <Router>
                <div className="min-h-screen bg-white">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <main>
                                <Hero />
                                <Features />
                                <About />
                                <Services />
                                <Destinations />
                                <Fleet />
                                <Testimonials />
                                <Contact />
                            </main>
                        } />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/legal" element={<Legal />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </TranslationProvider>
    );
}

export default App;