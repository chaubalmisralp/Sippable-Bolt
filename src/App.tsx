import Header from './components/Header';
import Hero from './components/Hero';
import Machines from './components/Machines';
import Venues from './components/Venues';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Machines />
      <Venues />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
