export const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around relative w-full">
        <div className="p-5 absolute">
          <img src="/Fotos/Logo Vivala.png" alt="Logo vivala" />
        </div>
        <div className="p-5 text-start absolute">
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
        <div className=" flex flex-col flex-nowrap justify-center absolute">
          <p className="flex justify-center items-center font-bold text-white">
            Fale conosco
          </p>
          <div className="flex flex-row gap-2">
            <img src="/Fotos/Vector.png" alt="whats" />
            <span>+55 (11) 966585778</span>
          </div>
          <div className="flex flex-row gap-2 py-3">
            <img src="/Fotos/Vector.png" alt="whats" />
            <span>+55 (11) 983491518</span>
          </div>
          <div className="flex flex-row gap-2 py-1">
            <img src="/Fotos/ic_round-mail-outline.png" alt="email" />
            <span>contato@vivala.hotmail.com</span>
          </div>
        </div>
        <div className="gap-5 text-white flex justify-center absolute">
          <div>
            <img src="/Fotos/instagram.png" alt="INSTAGRAM" />
          </div>
          <div>
            <img src="/Fotos/ic_baseline-facebook.png" alt="FACEBOOK" />
          </div>
          <div>
            <img src="/Fotos/mdi_linkedin.png" alt="LINKEDIN" />
          </div>
        </div>
        <div className="flex gap-5 absolute">
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
        <img
          src="/Fotos/IMG_5882Footer.png"
          alt="Footer_vivala"
          className="w-full"
        />
      </div>
    </>
  );
};

{
  /* div fale conosco
  <div className="bg-orange-600 p-5">
          <ul>
            <p className="text-center p-2">Fale conosco</p>
            <li>+ 55 2999-888</li>
            <li>+ 55 6666-5554</li>
            <li>contato@vivala.com</li>
          </ul>
        </div>
*/
}
