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

{
  /*linha 44

 <div className="col-span-2 absolute ml-96 p-3">
          <div className="flex justify-between">
            <div className="flex gap-2">
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

            <div className="flex gap-2 mt-96">
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
          <div className="py-6 absolute">
            <p className="text-black font-semibold text-2xl">
              Atente-se as novidades
            </p>
            <div className="absolute">
              <input
                type="text"
                className="outline-none w-32 ml-32 bg-transparent"
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>
        </div>
*/
}

{
  /*  <div className="absolute mt-96 text-white">
          <ul>
            <p className="font-semibold text-xl">Fale conosco</p>
            <li>+ 55 6666-8888</li>
            <li>+ 55 7777-2222</li>
            <li>contato@vivala.com.br</li>
            <p>
              Av Paulista 960, cj 502, Bela Vista, <br />
              São Paulo, CEP 01310-100
            </p>
          </ul>
        </div> */
}

{
  /* <div className="col-span-4 absolute bottom-0  flex justify-end">
          <div className="w-32 h-10 border border-black text-center cursor-pointer">
            <button>Buscar</button>
          </div>
        </div> */
}

{
  /* <button className="flex absolute xl:mt-60 xl:ml-[850px] border rounded text-white justify-center items-center w-20">
          Enviar
        </button> */
}

{
  /* 
     <footer className="flex w-full h-1/2 mt-10 md:flex-row flex-col justify-around items-start relative">
        <div className="absolute start-10 center-0 py-5 ">
          <ul>
            <img src="/Fotos/Logo Vivala.png" alt="" />
            <li className="font-medium text-white font-italic md:text-white">
              Vivalá Turismo e Serviços Ltda
            </li>
            <li className="font-medium text-white font-italic md:not-italic">
              CNPJ 22.693.622.0001-85
            </li>
          </ul>
        </div>
        <div className="absolute mr-96 py-5 text-white">
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
        <div className="absolute ml-72 flex p-5 text-white">
          <ul>
            <p className="text-2xl">Fale conosco</p>
            <li className="flex">
              <Link href="#">
                <img src="/Fotos/Vector.png" alt="whats" />
                <p>+55 (11) 966585778</p>
              </Link>
            </li>
            <li className="flex">
              <Link href="#">
                <img src="/Fotos/Vector.png" alt="" />
                +55 (11) 983491518
              </Link>
            </li>
            <li className="flex">
              <a href="#">
                <img src="/Fotos/ic_round-mail-outline.png" alt="" />
                contato@vivala.hotmail.com
              </a>
            </li>
            <li className="py-5">
              Av Paulista 960, cj 502, Bela Vista,
              <br /> São Paulo, CEP 01310-100
            </li>
          </ul>
        </div>

        <div className="flex justify-between  mx-72 p-3 absolute ">
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
          <div className="flex gap-3 mx-10">
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
        
        <img
          src="/Fotos/IMG_5882Footer.png"
          alt="Footer_vivala"
          className="w-full"
        />
      </footer>
*/
}
