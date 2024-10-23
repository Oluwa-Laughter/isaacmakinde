import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased ">
      <div className="fixed w-full h-full top-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#7877c64c,rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Services />
        <Skills />
      </div>
    </div>
  );
};

export default App;
