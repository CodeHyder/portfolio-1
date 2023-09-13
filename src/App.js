import './App.css';
import Header from 'components/Header';
import Home from 'components/Home';
import About from 'components/About';
import Skills from 'components/Skills';
import Services from 'components/Services';
import Qualification from 'components/Qualification';
import Portfolio from 'components/Portfolio';
import Footer from 'components/Footer/Index';
import ScrollUp from 'components/ScrollUp';
import Contact from 'components/Contact';
import Testimonials from 'components/Testimonials';


function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
      </main>
      <Footer />
      <ScrollUp />
      
    </>
  );
}

export default App;
