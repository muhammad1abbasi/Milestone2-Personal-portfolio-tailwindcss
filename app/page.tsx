import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/footer';

const Home: React.FC = () => (
  <div>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
