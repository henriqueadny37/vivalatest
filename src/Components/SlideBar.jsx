import { useState } from "react";

function SlideBar() {
  const [SlideBar, setSlideBar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-orange-600 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <img src="/Fotos/Logo Vivala.png" alt="LOGO" />
              {/*HAMBUERGUER MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-red-700 rounded outline-none focus:border-gray-500 focus:border"
                  onClick={() => setSlideBar(!SlideBar)}>
                  {SlideBar ? (
                    <img src="/icons/close.svg" alt="logo-close" />
                  ) : (
                    <img src="/icons/bars.svg" alt="hamburguer-menu" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                SlideBar ? "p-12 md:p-0 block" : "hidden"
              }`}>
              <ul>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Encontre sua expedição
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-orange-600"
                    onClick={() => setSlideBar(!SlideBar)}>
                    A vivalá
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Para organizações
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Central de ajuda
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">| </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSlideBar(!SlideBar)}>
                    Perfil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default SlideBar;
