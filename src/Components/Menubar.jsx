export const Menubar = () => {
  return (
    <>
      <div className="grid justify-items-center relative w-full">
        <header className="absolute container flex flex-wrap justify-center p-10 gap-5 text-lg text-white height=[992px]">
          <div className="flex mr-10 py-10-">
            <img src="/Fotos/Logo Vivala.png" alt="" className="w-44 h-28" />
          </div>
          <div className="flex flex-wrap gap-5 md:flex flex-wrap">
            <a href="#">Inicio</a>
            <a href="#">Encontre sua Expedição</a>
            <a href="#" className="text-orange-500">
              A vivalá
            </a>
            <a href="#">Para Organizações</a>
            <a href="#">Central de ajuda</a>
            <a href="#">Contato</a>
            <a href="#">Blog</a>
            <a href="#">| Perfil</a>
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
        </header>
        <img
          src="/Fotos/bannervivala.png"
          alt="vivala"
          height={546}
          className="w-full"
        />
        <div className="flex  bottom-0 center-0 absolute text-white font-semibold ">
          <p className="text-4xl mb-8">Somos a vivalá</p>
        </div>
      </div>
    </>
  );
};
