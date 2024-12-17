import { InView } from 'react-intersection-observer';

function AboutMe() {
  return (
    <section id="SobreMi" className="w-full pt-[80px] px-6">
      <div className="max-w-full pb-[50px] flex justify-start items-center gap-2">
        <h1 className="text-3xl text-gray-700 dark:text-white font-bold">Sobre Mi</h1>
      </div>
      <InView
        triggerOnce={true}  // Solo dispara la animación una vez al estar en vista
        as="div"
        className="flex flex-col md:flex-row gap-12 md:gap-12"
        threshold={0.5}  // Cuando el 50% de la sección es visible
      >
        {({ inView, ref }) => (
          <div ref={ref} className="max-w-full md:w-auto flex flex-col md:flex-row gap-12 md:gap-11">
            {/* Sección izquierda: animación desde la izquierda */}
            <div
              className={`flex flex-col gap-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0 animate-rotate-left' : 'opacity-0 translate-x-[-100%]'} w-full md:w-3/4`}
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg text-wrap">
                ¡Hola! Me llamo <span className="font-bold text-yellow-400">Tadeo</span>, pero me dicen Tade. Soy
                <span className="text-green-500 font-bold"> Técnico Superior en Desarrollo de Software</span> y actualmente estoy estudiando
                <span className="text-cyan-500 font-bold"> Ingeniería en Sistemas Informáticos</span>. Me apasiona el mundo IT y todo lo relacionado con la tecnología.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg text-wrap">
                Hace tres años, comencé mi emocionante viaje en la programación, y desde entonces, mi enfoque principal está en el
                <span className=" font-bold text-yellow-400"> Desarrollo Back-End</span>, donde aplico mi experiencia y conocimientos en tecnologías clave como
                <span className="text-cyan-500 font-bold"> Python</span>, <span className="text-indigo-400 font-bold"> PHP</span> y <span className="text-blue-500 font-bold"> MySQL</span>.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Soy un aprendiz constante, siempre explorando nuevas herramientas y tecnologías que potencien mi desarrollo profesional. Mi objetivo es contribuir activamente a proyectos innovadores en el ámbito digital, ofreciendo soluciones creativas y eficientes para resolver desafíos complejos. Estoy convencido de que mi dedicación y entusiasmo aportarán un valor significativo a cualquier equipo de trabajo.
              </p>
            </div>

            {/* Sección derecha: animación desde la derecha */}
            <div
              className={`flex items-center justify-end transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0 animate-rotate-right' : 'opacity-0 translate-x-[100%]'} w-full md:w-1/3`}
            >
              <div className="z-0 size-[240px] rounded-xl rotate-6 border border-slate-600 p-[10px]">
                <img
                  src="https://raw.githubusercontent.com/TadeoParmigiani/ImagenesPortafolio/main/FOTO%20CV.jpg"
                  alt="imagen-prfile"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </InView>

      <div className="flex justify-end pt-10 pb-4">
        <a
          href="#Principal"
          className="flex gap-2 rounded-xl px-4 py-1 hover:bg-slate-600 cursor-pointer"
        >
          <span className="text-gray-600 dark:text-gray-100 font-bold">Principal</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-gray-600 dark:text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
