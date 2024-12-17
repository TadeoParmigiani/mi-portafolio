
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Experiencie from '@sections/Experiencie';
import Projects from '@sections/Projects';
import Main from '@sections/Main';
import AboutMe from '@sections/AboutMe';
import Skills from "@components/Skills";


export default function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar que ocupa todo el ancho */}
      <div className="w-full h-full relative">
        <Navbar />
        {/* Main con un contenedor que tiene un ancho máximo */}
        <main className="px-8 2xl:px-0 max-w-6xl mx-auto flex flex-col gap-2">
          <Main />
          <Projects />
          <Experiencie />
          <Skills />
          <AboutMe />
          {/* <ContactMe /> */}
        </main>
        <Footer />
      </div>
    </div>
  );
  
  
}

