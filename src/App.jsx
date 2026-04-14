import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="text-neutral-200 antialiased font-sans">
      {/* Background */}
      <div className="fixed w-full h-full top-0 -z-10">
        <div className="absolute inset-0 bg-[#050510]"></div>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <NavBar />

      <main>
        <div className="container mx-auto px-6 lg:px-8">
          <Hero />
          <Services />
        </div>

        <Skills />

        <div className="container mx-auto px-6 lg:px-8">
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
