import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const FallbackComponent = lazy(() => import("./components/Fallback"));
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Suspense fallback={<FallbackComponent />}>
            <Navbar />
            <Hero />
          </Suspense>
        </div>

        <Suspense fallback={<FallbackComponent />}>
          <Routes>
            <Route path="/" element={<MainSections />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <div className="relative z-0">
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

const MainSections = () => {
  return (
    <>
      <About />
      <Experience />
      <Tech />
      <Works />
    </>
  );
};

export default App;
