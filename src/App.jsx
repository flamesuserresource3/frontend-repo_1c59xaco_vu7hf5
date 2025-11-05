import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} BrightsideAuto • AI Automation Agency
      </footer>
    </div>
  );
}

export default App;
