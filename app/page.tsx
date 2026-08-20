import About from "./src/about/page";
import Contact from "./src/contact/page";
import Experience from "./src/experience/page";
import HomePage from "./src/home/page";
import Projects from "./src/projects/page";
import Skills from "./src/skills/page";


export default function Home() {
  return (
    <>
     <main>
      <HomePage/>
       
       <About/>
       <Experience/>
       <Skills/>
     
    <Projects/>

      <Contact/>
     
    </main>
    </>
  );
}
