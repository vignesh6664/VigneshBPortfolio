import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-slate-900 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
        <div className=" mt-4 container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
