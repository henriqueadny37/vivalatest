export const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap w-full h-1/2 mt-10 md:flex-row flex-col justify-around items-start relative">
        <div className="absolute start-10 center-0 py-5 top-0">
          <ul>
            <img src="/Fotos/Logo Vivala.png" alt="" />
            <li className="font-medium text-white font-italic ">
              Vivalá Turismo e Serviços Ltda
            </li>
            <li className="font-medium text-white font-italic md:not-italic">
              CNPJ 22.693.622.0001-85
            </li>
          </ul>
        </div>
        <div className="flex-wrap absolute mr-96 py-5 text-white md:bottom-0 lg:top-0">
          <ul>
            <li>Inicio</li>
            <li>Busca</li>
            <li>A vivalá</li>
            <li>Para organizações</li>
            <li>Central de ajuda</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col flex-nowrap absolute py-5 text-white md:bottom-0 lg:top-0 xl:top-0 lg:ml-36 xl:ml-24">
          <p className="font-bold text-xl">Fale conosco</p>
          <div className="flex flex-row py-2">
            <img src="/Fotos/Vector.png" alt="whatsapp" />
            <p>+55 (11) 966585778</p>
          </div>
          <div className="flex flex-row py-2">
            <img src="/Fotos/Vector.png" alt="" />
            <p>+55 (11) 983491518</p>
          </div>
          <div className="flex flex-row">
            <img src="/Fotos/ic_round-mail-outline.png" alt="" />
            <p>contato@vivala.com.br</p>
          </div>
          <div className="xl:my-10">
            <p>
              {" "}
              Av Paulista 960, cj 502, Bela Vista,
              <br /> São Paulo, CEP 01310-100
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between sm:ml-[500px] top-0 md:ml-[500px] lg:ml-[600px] p-3 absolute xl:ml-[700px] 2xl:ml-[1500px]">
          <div className="flex gap-2">
            <div>
              <img src="/Fotos/instagram.png" alt="instgram-icon" />
            </div>
            <div>
              <img src="/Fotos/ic_baseline-facebook.png" alt="facebook" />
            </div>
            <div>
              <img src="/Fotos/mdi_linkedin.png" alt="linkedin" />
            </div>
            <div>
              <img src="/Fotos/mdi_youtube.png" alt="youtube" />
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap mx-10 absolute py-5 md:ml-[850px] lg:ml-[950px] xl:ml-[1100px] 2xl:ml-[2000px]">
          <div className="flex md:gap-4 xl:gap-4 2xl:gap-4">
            <div>
              <img src="/Fotos/flagBrazil.png" alt="" />
            </div>
            <div>
              <img src="/Fotos/flagspain.png" alt="" />
            </div>
            <div>
              <img src="/Fotos/flagUSA.png" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute py-32 md:py-36 lg:bottom-0 end-16 lg:ml-[60%] xl:mr-[90px] text-white font-bold">
          <span>ATENTE-SE AS NOVIDADES</span>
        </div>
        <div className="absolute flex flex-col md:bottom-5 md:ml-[50%] lg:bottom-5 lg:ml-96 xl:bottom-28 xl:end-44 text-white">
          <input
            type="text"
            className="outline-none w-32 ml-32 bg-transparent"
            placeholder="Digite seu e-mail"
          />
          <hr />
        </div>

        <button className="flex absolute xl:mt-60 xl:flex md:hidden xl:ml-[850px] border rounded text-white justify-center items-center w-20">
          Enviar
        </button>

        <img
          src="/Fotos/IMG_5882Footer.png"
          alt="Footer_vivala"
          className="w-full sm:h-[800px] md:h-[330px]"
        />
      </footer>
    </>
  );
};
