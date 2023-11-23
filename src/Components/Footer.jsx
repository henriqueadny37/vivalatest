export const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="bg-orange-600 p-5">
          <img src="/Fotos/Logo Vivala.png" alt="Logo vivala" />
        </div>
        <div className="bg-orange-600 p-5 text-center">
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
        <div className="bg-orange-600 p-5">
          <ul>
            <p className="text-center p-2">Fale conosco</p>
            <li>+ 55 2999-888</li>
            <li>+ 55 6666-5554</li>
            <li>contato@vivala.com</li>
          </ul>
        </div>
        <div className="p-5 gap-5 bg-black text-white flex justify-center items-center top-0">
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
      </div>
    </>
  );
};
