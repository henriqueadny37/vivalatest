export const Navbar = () => {
  return (
    <>
      <div className="flex relative">
        <header className="">
          <nav className="flex justify-between items-center absolute container mx-auto">
            <div>
              <img
                src="/Fotos/Logo Vivala.png"
                alt="LOGO"
                className="p-2 w-44 translate-x-4 translate-y-4"
              />
            </div>
            <div className="md:static absolute text-white py-11 left-0 top-[-100%] md:min-h-fit min-h-[60vh] md:w-auto w-full flex items-center px-5 md:justify-center xl:font-semibold 2xl:font-semibold text-xl">
              <ul className="flex md:flex-row flex-col gap-4 md:items-center">
                <li>
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#">Encontre sua expedição</a>
                </li>
                <li>
                  <a href="#" className="text-orange-600">
                    A vivalá
                  </a>
                </li>
                <li>
                  <a href="#">Para organizações</a>
                </li>
                <li>
                  <a href="#">Central de ajuda</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">| </a>
                </li>
                <li>
                  <a href="#">Perfil</a>
                </li>
              </ul>
            </div>
            <div className="flex hidden md:flex gap-3 mt-2">
              <div>
                <img src="/Fotos/flagspain.png" alt="bandeira espanha" />
              </div>
              <div>
                <img src="/Fotos/flagUSA.png" alt="bandeira USA" />
              </div>
              <div>
                <img src="/Fotos/flagBrazil.png" alt="bandeira brasil" />
              </div>
            </div>
            <img
              src="/icons/bars.svg"
              alt="MENU-HAMBURGUER"
              className="w-full xl:hidden 2xl:hidden md:hidden sm:flex sm:w-10 h-10 cursor-pointer sm:items-center flex-row"
            />
          </nav>
        </header>
        <img
          src="/Fotos/bannervivala.png"
          alt="vivala"
          height={546}
          className="w-full md:flex sm:hidden"
        />
        <img src="/Fotos/image 1.png" alt="" className="w-full md:hidden" />
        <div className="translate-x-96 absolute bottom-0 center-0 text-white font-semibold">
          <p className="flex flex-wrap justify-center items-center text-7xl mb-8">
            Somos a vivalá
          </p>
        </div>
      </div>
    </>
  );
};

{
  /* primeira foto
md:min-h-[60vh] md:min-h-[60vh]
*/
}

{
  /*className=" sm:min-h-full sm:w-full flex" */
}
