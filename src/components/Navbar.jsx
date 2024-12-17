import menu from "@assets/menu.svg";
import { useState, useEffect } from "react";

function BlockIf({ children, condition }) {
  return condition ? children : null;
}

function LinkNavbar({ children, id }) {
  return (
    <li>
      <a
        href={"#" + id}
        className="text-white font-rubik hover:text-slate-300 text-lg font-extralight cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}

function Links() {
  return (
    <>
      <LinkNavbar id="Principal">Principal</LinkNavbar>
      <LinkNavbar id="Experiencia">Experiencia</LinkNavbar>
      <LinkNavbar id="Proyectos">Proyectos</LinkNavbar>
      <LinkNavbar id="SobreMi">Sobre Mi</LinkNavbar>
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Controla si el menú está abierto o cerrado
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark"); // Guardamos el tema en localStorage
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Ancho de la pantalla

  const breakLinks = 768; // El tamaño de pantalla para cambiar entre vista móvil y de escritorio

  // Actualizar el tamaño de la pantalla cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Cambiar clase "dark" en el <html> cuando cambia el modo oscuro
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Asegurarse de que cada vez que isDarkMode cambie, la clase se agregue o elimine

  // Cambiar el modo oscuro
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme); // Guardar el tema en localStorage
  };

  // Función para abrir/cerrar el menú móvil
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full px-6 sm:px-20 backdrop-blur-sm z-50 flex justify-between items-center bg-gray-600 dark:bg-gray-800/70">
      <div className="w-full h-[60px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white">
          <svg
            className="fill-current"
            stroke="none"
            strokeWidth="0"
            viewBox="0 0 640 512"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
          </svg>
          <span className="text-gray-200 text-sm lg:text-xl font-bold font-rubik hidden sm:inline-block ml-2">
            Portafolio
          </span>
        </div>

        {/* Desktop Links */}
        {screenWidth > breakLinks && (
          <ul className="hidden md:flex items-center gap-10">
              <Links />
          </ul>
        )}

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Botón para cambiar entre modo claro y oscuro */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-600 text-2xl"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* Botón de menú móvil */}
          {screenWidth <= breakLinks && (
            <button
              onClick={toggleMenu}
              className="cursor-pointer p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <img src={menu} alt="menu" className="size-10" />
            </button>
          )}
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && screenWidth <= breakLinks && (
        <div className="w-full absolute top-16 left-0 bg-gray-800/80 p-4">
          <ul className="flex flex-col items-center gap-4">
            {Links}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
