import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import BlogSection from "./components/Blog";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import Testimony from "./components/Testimony";
import FAQ from "./components/FAQ";
import FeatureSection from "./components/Feature";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <AboutSection />
        <BlogSection />
        <Service />
        <Pricing />
        <Testimony />
        <FAQ />
        <FeatureSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
