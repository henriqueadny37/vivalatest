import { useState } from "react";

function SlideBar() {
  const [SlideBar, setSlideBar] = useState(false);
  return (
    <div className="flex relative">
      <nav className="w-full top-0 left-0 right-0 z-10 absolute">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div>
                <img src="/Fotos/Logo Vivala.png" alt="LOGO" />
              </div>
              {/*HAMBUERGUER MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-red-700 rounded outline-none focus:border-gray-500 focus:border"
                  onClick={() => setSlideBar(!SlideBar)}>
                  {SlideBar ? (
                    <img
                      src="/icons/close.svg"
                      alt="logo-close"
                      className="h-16"
                    />
                  ) : (
                    <img
                      src="/icons/bars.svg"
                      alt="hamburguer-menu"
                      className="h-16"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={` md:flex md:items-center md:w-auto w-full ${
                SlideBar
                  ? "p-4 text-start bg-gradient-to-t from-orange-600 for bg-orange-400 absolute md:p-0 block"
                  : "hidden"
              }`}>
              <ul className="md:flex items-center justify-between text-white md:pl-0 gap-4">
                <li className="hover:bg-white hover:text-black rounded">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Inicio
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Encontre sua expedição
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded">
                  <a
                    href="#"
                    className="text-orange-600"
                    onClick={() => setSlideBar(!SlideBar)}>
                    A vivalá
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded p-2">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Para organizações
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded p-1">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Central de ajuda
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded p-1">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Contato
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded p-1">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Blog
                  </a>
                </li>
                <li className="hover:bg-white hover:text-black rounded sm:hidden md:flex">
                  <a href="#">| </a>
                </li>
                <div className="mt-2 mb-2 border border-white md:hidden"></div>
                <li className="hover:bg-white hover:text-black rounded p-1">
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Perfil
                  </a>
                </li>
              </ul>
              <div className="mt-2 mb-2 border border-white md:hidden"></div>
              <div className="flex mx-10 gap-3">
                <img src="/Fotos/flagspain.png" alt="" />
                <img src="/Fotos/flagUSA.png" alt="" />
                <img src="/Fotos/flagBrazil.png" alt="" />
              </div>
            </div>
            {/*bandeiras abaixo */}
          </div>
        </div>
      </nav>
      <img
        src="/Fotos/bannervivala.png"
        alt="banner-vivala"
        className="sm:hidden md:flex md:w-full lg:flex lg:w-full xl:flex xl:w-full 2xl:flex 2xl:w-full"
      />
      <img src="/Fotos/image 1.png" alt="" className="w-full md:hidden" />
      <div className="sm:translate-x-56 absolute bottom-0 center-0 sm:flex sm:justify-center sm:items-center text-white md:flex xl:translate-x-[500px] lg:translate-x-96 2xl:translate-x-[1000px] transition-all font-semibold">
        <p className="flex md:flex md:justify-center md:items-center sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-7xl mb-8">
          SOMOS A VIVALÁ
        </p>
      </div>
    </div>
  );
}
export default SlideBar;
