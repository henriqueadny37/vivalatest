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
            <div className="md:static absolute text-white py-11 left-0 top-[-100%] sm:hidden md:flex md:justify-center md:min-h-fit min-h-[60vh] md:w-auto w-full flex items-center px-5 xl:font-semibold 2xl:font-semibold text-xl lg:flex lg:w-full md:text-lime-500 md:items-center lg:text-yellow-300 xl:text-pink-500  2xl:text-white">
              <ul className=" md:flex sm:hidden md:items-center xl:gap-4 md:gap-2 md:justify-center">
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
            <div className="flex sm:hidden md:flex md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 mt-2">
              <div>
                <img
                  src="/Fotos/flagspain.png"
                  alt="bandeira espanha"
                  className="md:w-[30px] md:h-[16px] shadow-lg lg:w-[20px] lg:h-[15px]"
                />
              </div>
              <div>
                <img
                  src="/Fotos/flagUSA.png"
                  alt="bandeira USA"
                  className="md:w-[30px] md:h-[16px] shadow-lg lg:w-[20px] lg:h-[15px]"
                />
              </div>
              <div>
                <img
                  src="/Fotos/flagBrazil.png"
                  alt="bandeira brasil"
                  className="md:w-[30px] md:h-[16px] shadow-lg lg:w-[20px] lg:h-[15px]"
                />
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
          className="sm:hidden md:flex md:w-full lg:flex lg:w-full xl:flex xl:w-full 2xl:flex 2xl:w-full"
        />
        <img src="/Fotos/image 1.png" alt="" className="w-full md:hidden" />
        <div className="sm:translate-x-56 absolute bottom-0 center-0 sm:text-yellow-400 sm:flex sm:justify-center sm:items-center md:text-white md:flex xl:translate-x-[500px] lg:translate-x-96 2xl:translate-x-[1000px] transition-all font-semibold">
          <p className="flex md:flex md:justify-center md:items-center sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-7xl mb-8">
            SOMOS A VIVALÁ
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
{
  /* div nav
flex justify-between items-center absolute container mx-autor
  */
}
{
  /* div ul gap-4  md:flex-row */
}
