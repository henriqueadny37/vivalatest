import Link from "next/link";

export const Rserva = () => {
  return (
    <>
      <footer className="flex flex-wrap w-full h-1/2 mt-10 md:flex-row flex-col justify-around items-start relative">
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
        <div className="flex-wrap absolute mr-96 py-5 text-white">
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
        <div className="flex-wrap absolute ml-72 flex p-5 text-white">
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

        <div className="flex flex-wrap justify-between mx-96 p-3 absolute">
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
    </>
  );
};
