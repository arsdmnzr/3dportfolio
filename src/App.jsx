import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ResumeViewer from "./ResumeViewer";
import Resume3D from "./Resume3D";

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Resume3D /> */}
      <Skills />
      <Projects />
      <ResumeViewer />
    </div>
  );
}
