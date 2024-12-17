import Mail from "@assets/mail.svg";
import TypingEffect from "@purecomponents/TypingEffect";
// import Skills from "@components/Skills";

// function Github() {
//   const url = "https://github.com/TadeoParmigiani";
//   return (
//     <a
//       href={url}
//       target="_blank"
//       className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 hover:bg-slate-500/50"
//     >
//       <i className="devicon-github-original text-white text-xl"></i>
//       <span className="text-white font-medium font-rubik">Github</span>
//     </a>
//   );
// }

// function Download() {
//   return (
//     <div className="lg:max-w-max mt-2 flex flex-col items-center lg:items-start gap-y-4">
//       <a
//         href="/path/to/cv.pdf" // Asegúrate de poner la ruta correcta del CV
//         download="Tadeo Parmigiani CV (1).pdf"
//         className="h-8 cursor-pointer font-rubik rounded-md px-4 bg-blue-500 hover:bg-blue-800 transition-background duration-300 text-white flex items-center font-semibold"
//       >
//         Download CV
//       </a>
//     </div>
//   );
// }

// function Linkedin() {
//   const url = "https://www.linkedin.com/in/tadeoparmigiani";
//   return (
//     <a
//       href={url}
//       target="_blank"
//       className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 hover:bg-slate-500/50"
//     >
//       <i className="devicon-linkedin-plain text-white text-xl"></i>
//       <span className="text-white font-medium font-rubik">Linkedin</span>
//     </a>
//   );
// }

// function Email() {
//   const mail = "tadeoparmi2001@gmail.com";
//   return (
//     <a
//       href={"mailto:" + mail}
//       target="_blank"
//       className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 hover:bg-slate-500/50"
//     >
//       <img src={Mail} alt="logo_email" className="size-8 p-1" />
//       <span className="text-white font-medium font-rubik">{mail}</span>
//     </a>
//   );
// }

function Presentation() {
  return (
    <div className="max-w-full w-full flex flex-col items-center lg:items-start gap-y-2">
      <h2 className="text-gray-900 dark:text-white text-3xl sm:text-5xl font-rubik font-extralight text-wrap">¡Hola a Todos! yo soy</h2>
      <h1 className="bg-gradient-to-r from-blue-800 via-purple-600 to-cyan-500 text-transparent bg-clip-text text-4xl sm:text-5xl lg:text-6xl font-bold font-rubik text-wrap pb-2.5">Tadeo Parmigiani</h1>
      <TypingEffect text={"Desarrollador Back-End"} typingSpeed={100} eraseSpeed={50} pauseDuration={2000} />  
    </div>
  );
}

function UbicationWork() {
  return (
    <div className="lg:max-w-max mt-2 flex flex-col gap-2">
      {/* Texto de ubicación */}
      <div className="flex flex-col items-start">
        <span className="text-gray-900 dark:text-white font-rubik font-semibold">
          Rosario Santa Fe, Argentina
        </span>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-gray-800 dark:text-gray-200 font-rubik font-normal">
          Apasionado por el desarrollo Back-End, con experiencia en bases de datos, creación de APIs y diseño de sistemas escalables y eficientes.
        </span>
      </div>

      {/* Botones */}
      <div className="mt-2 flex items-center gap-x-7">
        <span className="border-2 border-green-400 bg-green-400 rounded-full max-w-max px-3 py-1 text-white text-base font-bold hover:text-green-500 hover:bg-white dark:hover:bg-gray-900 transition-background duration-300">
          Disponible para Trabajar
        </span>
        <a
          href="src/files/Tadeo-Parmigiani-CV-(1).pdf" 
          download="Tadeo-Parmigiani-CV.pdf"
          className="h-8 cursor-pointer font-rubik rounded-md px-4 bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-700 transition-background duration-300 text-white flex items-center font-semibold"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}


function FormsContact() {
  return (
    <div className="flex gap-x-2.5 mt-2 flex-wrap justify-center lg:justify-start">
      <div className="flex-2 min-w-[50px] max-w-[150px]">
        <a
          href="https://github.com/TadeoParmigiani"
          target="_blank"
          className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700"
        >
          <i className="devicon-github-original text-white text-xl"></i>
          <span className="font-medium font-rubik">Github</span>
        </a>
      </div>
      <div className="flex-2 min-w-[50px] max-w-[150px]">
        <a
          href="https://www.linkedin.com/in/tadeoparmigiani"
          target="_blank"
          className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700"
        >
          <i className="devicon-linkedin-plain text-white text-xl"></i>
          <span className="font-medium font-rubik">Linkedin</span>
        </a>
      </div>
      <div className="flex-2 min-w-[50px] max-w-[300px]">
        <a
          href={"mailto:" + "tadeoparmi2001@gmail.com"}
          target="_blank"
          className="max-w-max cursor-pointer flex items-center gap-2 px-4 py-1 rounded-full border-2 border-slate-500/50 bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700"
        >
          <img src={Mail} alt="logo_email" className="size-8 p-1" />
          <span className="font-medium font-rubik">tadeoparmi2001@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

function Main() {
  return (
<section
  id="Principal"
  className="animate-slide-down w-full min-h-screen pt-[220px] px-6 flex flex-col lg:flex-row gap-4 items-center lg:items-start"
>
  {/* Contenedor izquierdo */}
  <div className="flex flex-col gap-4 w-full lg:w-1/2">
    <Presentation />
    <UbicationWork />
    <FormsContact />
  </div>

  {/* Contenedor derecho con imagen */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
    <img
      src="https://i.pinimg.com/originals/79/9e/0d/799e0d7779f6ea6c3a89885ff60c55af.gif"
      alt="logo"
      className="w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] rounded-full object-cover"
    />
  </div>
</section>

  );
}

export default Main;


