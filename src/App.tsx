import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyProjects from "./Components/MyProjects";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import ScrollFadeIn from "./Components/ScrollFadeIn";
import ScrollToTopButton from "./Components/ScrollUp";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="text-white bg-black ">
      <Navbar />
      <Header />
      <ScrollFadeIn delay={0.2}>
        <AboutMe />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.2}>
        <Resume />
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <Services />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.2}>
        <Skills />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.2}>
        <MyProjects />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.2}>
        <Footer />
      </ScrollFadeIn>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
