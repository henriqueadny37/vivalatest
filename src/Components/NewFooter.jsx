export const NewFooter = () => {
  return (
    <>
      <footer className="grid grid-cols-1 relative mt-10">
        <div className="p-3 absolute">
          <img src="/Fotos/Logo Vivala.png" alt="" />
          <ul className="font-medium text-white font-italic md:text-white">
            <li>Vivalá Turismo e Serviços Ltda</li>
            <li>CNPJ 22.693.622.0001-85</li>
          </ul>
        </div>
        <div className="absolute mt-48 ml-5 text-white">
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
        <div className="flex flex-col mt-96 ml-5 flex-nowrap absolute py-5 text-white lg:ml-36 xl:ml-24">
          <p className="font-bold text-white text-xl">Fale concosco</p>
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
          <div className="flex flex-col absolute mt-60">
            <p className="text-white font-bold text-xl ml-4">
              Atente-se as novidades
            </p>
            <div className="py-10 -mx-28">
              <input
                type="text"
                className="outline-none w-32 ml-32 bg-transparent"
                placeholder="Digite seu e-mail"
              />
              <hr />
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute mx-[500px] py-5">
          <div className="flex gap-3">
            <img src="/Fotos/instagram.png" alt="instgram-icon" />
            <img src="/Fotos/ic_baseline-facebook.png" alt="facebook" />
            <img src="/Fotos/mdi_linkedin.png" alt="linkedin" />
            <img src="/Fotos/mdi_youtube.png" alt="youtube" />
          </div>
          <div className="flex gap-5 mt-80 w-6 h-10">
            <img src="/Fotos/flagBrazil.png" alt="" className="" />
            <img src="/Fotos/flagspain.png" alt="" className="" />
            <img src="/Fotos/flagUSA.png" alt="" className="" />
          </div>
        </div>
        <img
          src="/Fotos/IMG_5882Footer.png"
          alt=""
          className="w-full sm:h-[800px]"
        />
      </footer>
    </>
  );
};
