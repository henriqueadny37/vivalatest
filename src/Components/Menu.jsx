import Link from "next/link";
export const Menu = () => {
  return (
    <>
      <header className="container mx-auto flex justify-center p-10 gap-5 text-lg">
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
      </header>
      <div className="grid justify-items-center relative">
        <img
          src="/Fotos/bannervivala.png"
          alt="vivala"
          width={2005}
          height={546}
        />
        <div className="flex absolute bottom-0 center-0 text-white font-semibold ">
          <p className="text-6x1">Somos a vivalá</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid justify-items-center">
          <p className="mt-10 text-center text-gray-600 text-4xl">
            Nosso objetivo é transformar o Brasil no maior destino de turismo
            sustentável do mundo criando expedições que sejam transformadoras
            para os viajantes, as comunidades e o planeta.
          </p>
          <p className="text-gray-600 text-xl font-semibold">
            Viajando com a vivalá, você:
          </p>
          <img
            src="/Fotos/infografico.png"
            alt="infografico"
            width={10140}
            height={992}
          />
        </div>
        <div className="flex">
          <p className="text-xl font-semibold text-gray-500">
            VIVALÁ EM NÚMEROS
          </p>
          <div>
            <img src="/Fotos/groupfoto.png" alt="" />
          </div>
          <div>
            <img src="/Fotos/groupfoto2.png" alt="" />
          </div>
          <div>
            <img src="/Fotos/groupfoto3.png" alt="" />
          </div>
          <div>
            <img src="/Fotos/vivianepediatria2.png" alt="" />
          </div>
          <div>
            <img src="/Fotos/image58.png" alt="" />
          </div>
          <div>
            <img src="/Fotos/groupfoto4.png" alt="" />
          </div>
        </div>

        <div className="h-10 w-40 mt-6 border border-orange-500 flex justify-center items-center font-semibold text-orange-500">
          <button className="">
            <Link href="#">Saiba Mais</Link>
          </button>
        </div>
        <div className="flex mt-20 font-semibold text-4xl text-gray-500">
          <img src="/Fotos/moeda.png" alt="" />
          <p className="ml-3">
            Acreditamos que o turismo sustentável seja fator chave para o
            desenvolvimento socioambiental e empoderamento de comunidades
            brasileiras.
          </p>
        </div>
        <div className="grid justify-items-center relative mt-44">
          <img src="/Fotos/2017-09-18-photo.png" alt="Amazonia" />
          <div className="flex absolute center-0 center-0 bg-white mt-28">
            <img src="/Fotos/Frame.png" alt="mountain,flag" />
            Ressignificar a relação das pessoas com o Brasil, os biomas e as
            comunidades tradicionais do país.
          </div>
          <div className="flex absolute bottom-0 center-0 bg-white mb-44">
            <img src="/Fotos/Frameyes.png" alt="eye" />
            <p>
              Transformar o Brasil no maior destino de turismo sustentável do
              planeta.
            </p>
          </div>
          <div className="flex absolute top-0 mt-60 bg-white">
            <img src="/Fotos/hearticon.png" alt="hearticon" />
            <p className="flex">
              Tratar o planeta como nosso maior acionista Revelar o melhor do
              nosso potencial Proporcionar experiências inesquecíveis Fortalecer
              o respeito pelo diverso Guiar o caminho do bem
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
