export const PhotoViva = () => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-between relative">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 absolute mb-4">
          <img src="/Fotos/Logo Vivala.png" alt="Logo vivala" />
          <ul className="font-medium text-white ">
            <li>Vivalá Turismo e Serviços Ltda</li>
            <li>CNPJ 22.693.622.0001-85</li>
          </ul>
        </div>
        <div className="flex absolute w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mx-96 py-5">
          <ul>
            <li>Inicio</li>
            <li>Busca</li>
            <li>A vivala</li>
            <li>Para organizações</li>
            <li>Central de ajuda</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex absolute w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mx-96">
          <ul>
            <li>+ 55 6666-8888</li>
            <li>+ 55 7777-2222</li>
            <li>contato@vivala.com.br</li>
          </ul>
        </div>
        <div className="absolute w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mx-96 py-5">
          <div className="flex gap-2 justify-between">
            <div>
              <img src="/Fotos/instagram.png" alt="" />
            </div>
            <div>
              <img src="/Fotos/ic_baseline-facebook.png" alt="FACEBOOK" />
            </div>
            <div>
              <img src="/Fotos/mdi_linkedin.png" alt="LINKEDIN" />
            </div>
            <div>
              <img src="/Fotos/mdi_youtube.png" alt="youtube" />
            </div>
          </div>
        </div>
        <img
          src="/Fotos/IMG_5882Footer.png"
          alt="Footer_vivala"
          className="w-full"
        />
      </div>
    </>
  );
};
