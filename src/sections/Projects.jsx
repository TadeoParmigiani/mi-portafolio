import { useState, useEffect, useRef } from "react";
import useIntersection from "@purecomponents/useIntersection"; // Importamos el hook
import github from "@assets/github.svg";
import { projects } from "@data/projects";
import { useInView } from 'react-intersection-observer';

function REACT() {
  return (
    <button className="flex items-center px-3 rounded-full border border-cyan-600 gap-2">
      <i className="devicon-react-original colored"></i>
      <span className="text-gray-900 dark:text-white">React JS</span>
    </button>
  );
}
function PHP() {
  return (
    <button className="flex items-center px-3 rounded-full border  border-violet-400 gap-2">
      <i className="devicon-php-plain colored"></i>
      <span className="text-gray-900 dark:text-white">Php</span>
    </button>
  );
}
function JS() {
  return (
    <button className="flex items-center px-3 rounded-full border  border-yellow-300 gap-2">
      <i className="devicon-javascript-plain colored"></i>
      <span className="text-gray-900 dark:text-white">JavaScript</span>
    </button>
  );
}
function MYSQL() {
  return (
    <button className="flex items-center px-3 rounded-full border  border-blue-500 gap-2">
      <i class="devicon-mysql-original colored"></i>
      <span className="text-gray-900 dark:text-white">Mysql</span>
    </button>
  );
}
function PYTHON() {
  return (
    <button className="flex items-center px-3 rounded-full border  border-yellow-200 gap-2">
      <i class="devicon-python-plain colored"></i>
      <span className="text-gray-900 dark:text-white">Python</span>
    </button>
  );
}
function HTML() {
  return (
    <button className="flex items-center px-3 rounded-full border  border-orange-500 gap-2">
      <i class="devicon-html5-plain colored"></i>
      <span className="text-gray-900 dark:text-white">Html</span>
    </button>
  );
}
function CSS() {
  return (
    <button className="flex items-center px-3 rounded-full border  border-sky-300 gap-2">
      <i class="devicon-css3-plain colored"></i>
      <span className="text-gray-900 dark:text-white">Css</span>
    </button>
  );
}
function TAILWIND() {
  return (
    <button className="flex items-center px-3 rounded-full border border-blue-500 gap-2">
      <i className="devicon-tailwindcss-original colored"></i>
      <span className="text-gray-900 dark:text-white">Tailwind</span>
    </button>
  );
}

function ObtnerTecnologia(tecnologia) {
  if(tecnologia==="REACT"){
    return <REACT/>
  }
  else if(tecnologia==="TAILWIND"){
    return <TAILWIND/>
  }
  else if(tecnologia==="PHP"){
    return <PHP/>
  }
  else if(tecnologia==="PYTHON"){
    return <PYTHON/>
  }
  else if(tecnologia==="MYSQL"){
    return <MYSQL/>
  }
  else if(tecnologia==="JS"){
    return <JS/>
  }
  else if(tecnologia==="HTML"){
    return <HTML/>
  }
  else if(tecnologia==="CSS"){
    return <CSS/>
  }
  else{
    return null;
  }
}

function CardProject({ project }) {
  const { titulo, tecnologias, descripcion, url_github, url_image } = project;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null); // Usa useRef aquí

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la tarjeta es visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`border-gray-400 bg-gray-50 dark:bg-[#1E293B] rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ${
        isVisible ? "animate-scale-up" : "opacity-0"
      }`}
    >
      {/* Imagen del Proyecto */}
      <div className="relative">
        <img
          src={url_image}
          alt="Image-project"
          className="w-full h-[300px] object-cover" /* Aumenta la altura */
        />
      </div>

      {/* Contenido */}
      <div className="p-8 flex flex-col gap-4"> {/* Aumenta el padding */}
        <p className="text-gray-600 dark:text-gray-100 font-bold text-2xl">{titulo}</p> {/* Aumenta el tamaño del título */}

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{descripcion}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-3">
          {tecnologias.map((tecnologia, index) => (
            <div key={index}>
              {ObtnerTecnologia(tecnologia)}
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex justify-center mt-6">
          {url_github && (
            <a
              href={url_github}
              target="_blank"
              className="flex items-center gap-2 text-white px-4 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-2xl"
            >
              <img
                src={github}
                alt="GitHub Logo"
                className="w-6 h-6 filter dark:filter-none filter-invert dark:filter-invert-0 transition-all duration-200"
              />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="Proyectos" className="w-full min-h-screen pt-[80px] sm:px-6 px-4">
      {/* Encabezado */}
      <div className="text-gray-800 dark:text-gray-200 w-full mb-10 flex justify-start items-center gap-4">
        <h1 className="text-3xl text-gray-900 dark:text-white font-bold">Proyectos</h1>
      </div>

      {/* Grid para las cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <CardProject key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;