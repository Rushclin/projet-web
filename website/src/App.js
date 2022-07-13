import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Footer />
        </article>
      </main>
    </>
  );
}

export default App;
