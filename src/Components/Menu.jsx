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
<<<<<<< HEAD
=======
        <div className="flex gap-5 mt-2">
          <img src="/Fotos/flagspain.png" alt="flag spain" />
          <img src="/Fotos/flagUSA.png" alt="flag USA" />
          <img src="/Fotos/flagBrazil.png" alt="flag Brazil" />
        </div>
>>>>>>> d1903093e904bf9854ffba76d5f4a450bf6c505e
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

        <div className="flex justify-center items-center">
          <button className="h-10 w-40 mt-6 border border-orange-500 font-semibold text-orange-500">
            <Link href="#">Saiba Mais</Link>
          </button>
        </div>
        <div className="flex mt-20 font-semibold text-4xl text-gray-500">
          <img src="/Fotos/moeda.png" alt="moeda" />
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
          <div className="flex absolute top-0 mt-60 w-96 h-64 bg-white shrink">
            <img src="/Fotos/hearticon.png" alt="hearticon" />
            <p className="flex break-words text-center">
              1. Tratar o planeta como nosso maior acionista 2. Revelar o melhor
              do nosso potencial 3. Proporcionar experiências inesquecíveis 4.
              Fortalecer o respeito pelo diverso 5. Guiar o caminho do bem
            </p>
          </div>
        </div>

        <span className="text-gray-600 font-semibold text-2xl">
          Premios e conquistas
        </span>
        <div className="flex justify-center gap-5">
          <div className="flex-none w-2 h-8"></div>
          <div className="w-56 h-52 border border-gray text-center text-xs shrink">
            <span className="mt-5 text-gray-600 font-semibold">
              Vencedora do Global Student Entrepreneurs Award (GSEA)
            </span>
            <img
              src="/Fotos/GSEA_CMYK_primary 1.png"
              alt="EO GSEA"
              className="mt-5"
            />
            <div className="flex-none w-2 h-2"></div>
          </div>
          <div className="grid justify-items-center w-56 h-52 border border-gray text-center text-xs text-gray-600 font-semibold shrink">
            <span>Participação no programa de aceleração Inovativa Brasil</span>
            <img src="/Fotos/inovativa 1.png" alt="inovativa" />
          </div>
          <div className="grid justify-items-center w-56 h-52 border border-gray text-center text-xs text-gray-600 font-semibold shrink">
            <span>
              Escolhida como Young Leaders of America (YLAI), Washington DC,
              Denver, Detroit
            </span>
            <img src="/Fotos/YLAI 1.png" alt="" />
          </div>
          <div className=" w-56 h-56 grid justify-items-center border border-gray text-center text-xs text-gray-600 font-semibold shrink">
            <p>
              Vencedora dos Prêmios Braztoa 2019 e 2020-2022, ONU e Organização
              Mundial de Turismo de Sustentabilidade
            </p>
            <div className="container mx-auto flex">
              <img src="/Fotos/image 44.png" alt="" />
              <img src="/Fotos/UNEnvironment_Logo_1.png" alt="UNEnviroment" />
              <img src="/Fotos/World_Tourism_Organization_Logo 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="h-10 w-40 mt-6 border border-orange-500 font-semibold text-orange-500">
            Saiba Mais
          </button>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-20">
          <div className="row-span-3 border border-gray-200">
            <img src="/Fotos/image 40.png" alt="familia" />
            <span className="text-orange-600 font-semibold text-2xl">
              Territorio animal
            </span>
            <div className="flex">
              <span>
                Como a Vivalá está potencializando a preservação ambiental no
                Brasil por meio do Turismo Sustentável
              </span>
            </div>
          </div>
          <div className="col-span-2 border border-gray-200">
            <div className="flex gap-4 text-2xl">
              <img src="/Fotos/image 37.png" alt="Diario do Comercio" />
              <span className="font-semibold text-orange-600">
                Diário do Comercio
              </span>
            </div>
            <span>Vivalá rende folego ás economias locais</span>
          </div>
          <div className="row-span-2 border border-gray-200">
            <div className="flex gap-4 text-2xl w-3/4">
              <img
                src="/Fotos/Expedição_Lençois Maranhense_222.png"
                alt="lençois maranhenses"
              />
              <span className="text-orange-600 font-semibold">
                Nome da mídia
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-center">
                Título da matéria. Se for maior que 4 linhas fica com 3
                pontinhos para não quebrar o padrão.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="h-10 w-60 mt-6 border border-orange-500 font-semibold text-white bg-orange-500">
            Confira Mais Matérias
          </button>
        </div>
        <div className="flex justify-center mt-20">
          <img src="/Fotos/_MG_7408 1.png" alt="fa;c parte do nosso time" />
        </div>
      </div>
    </>
  );
};
