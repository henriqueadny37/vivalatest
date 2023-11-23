import Link from "next/link";
import { Footer } from "./Footer";
export const Menu = () => {
  return (
    <>
      <div className="grid justify-items-center relative w-full">
        <header className="absolute container  flex justify-center p-10 gap-5 text-lg text-white height=[992px]">
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
          <div className="flex gap-3 mt-2">
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
        <div className="flex absolute bottom-0 center-0 text-white font-semibold ">
          <p className="text-4xl mb-8">Somos a vivalá</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <p className="mt-10 text-center text-gray-600 text-4xl">
            Nosso objetivo é transformar o Brasil no maior destino de turismo
            sustentável do mundo criando expedições que sejam transformadoras
            para os viajantes, as comunidades e o planeta.
          </p>
        </div>
        <div className="mt-10  grid justify-items-center">
          <p className="mr-[800px] text-gray-600 text-3xl font-semibold">
            Viajando com a vivalá, você:
          </p>
          <img
            src="/Fotos/infografico.png"
            alt="infografico"
            width={1040}
            height={992}
          />
        </div>
        <p className="text-xl font-semibold text-gray-500 mt-10">
          VIVALÁ EM NÚMEROS
        </p>
        <div className="flex m-10">
          <div className="grid justify-items-center relative">
            <div className="absolute mr-10">
              <img src="/Fotos/Layer_1.png" alt="icone-1" />
              <div className="w-10 mt-44">
                <p className="break-word text-white">
                  <span className="text-white font-bold text-xl">1716</span>{" "}
                  viajantes de 10 paises
                </p>
              </div>
            </div>
            <img src="/Fotos/groupfoto.png" alt="the first group vivala" />
          </div>
          <div className="grid justify-items-center relative">
            <div className="absolute ml-16 p-3">
              <img src="/Fotos/Layer_2.png" alt="icone-2" />
              <div className="w-10 mt-44">
                <p className="break-word text-white">
                  <span className="font-bold text-xl">111</span> expedições em
                  grupo
                </p>
              </div>
            </div>
            <img src="/Fotos/groupfoto2.png" alt="foto-grupo-vivala" />
          </div>
          <div className="grid justify-items-center relative">
            <div className="absolute w-8 h-8 p-2 sm:w-28 h-28 pt-8">
              <img src="/icons/circlemoney.svg" alt="circle-money" />
              <img src="/icons/house.svg" alt="casa-vivala" />
              <p className="text-white font-semibold w-18 h18">
                <span className="font-bold">R$ 1.7M</span>
                injetados nas economias locais
              </p>
            </div>

            <img src="/Fotos/groupfoto3.png" alt="duas-pessoas-vivalá" />
          </div>
          <div className="grid justify-items-center relative">
            <div className="absolute mr-10 p-3">
              <img src="/icons/timevivala.svg" alt="icons-timevivala" />
              <div className="w-10 mt-44">
                <p className="break-word text-white">
                  <span className="text-white font-bold text-xl">8152</span>{" "}
                  Horas de volunturismo
                </p>
              </div>
            </div>
            <img
              src="/Fotos/vivianepediatria2.png"
              alt="viviane-pediatria-vivala"
            />
          </div>
          <div className="grid justify-items-center relative">
            <div className="absolute mr-10">
              <img src="/icons/hands.svg" alt="hands vivala" />
              <div className="w-10 mt-44">
                <p className="break-word text-white">
                  <span className="text-white font-bold text-xl">201</span>{" "}
                  negócios familiares mentorados
                </p>
              </div>
            </div>
            <img src="/Fotos/image58.png" alt="" />
          </div>
          <div className="grid justify-items-center relative">
            <div className="absolute mr-10 ">
              <img src="/icons/treevivala.svg" alt="arvore-vivala" />
              <div className="w-10 mt-44">
                <p className="break-word text-white">
                  <span className="text-white font-bold text-xl">16</span>{" "}
                  destinos em área preservadas
                </p>
              </div>
            </div>
            <img src="/Fotos/groupfoto4.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="h-10 w-40 mt-6 border border-orange-500 font-semibold text-orange-500">
            <Link href="#">Saiba Mais</Link>
          </button>
        </div>
        <div className="flex mt-20 p-5 container mx-auto font-semibold text-4xl text-gray-500">
          <img src="/Fotos/moeda.png" alt="moedaPlaneta" />
          <p className="ml-3">
            Acreditamos que o turismo sustentável seja fator chave para o
            desenvolvimento socioambiental e empoderamento de comunidades
            brasileiras.
          </p>
        </div>
        <div className="h-screen flex justify-center items-center mt-10 relative">
          <img src="/Fotos/2017-09-18-photo.png" alt="amazonia vivala" />
          <div className="flex mb-96 flex-shrink-0 w-[742px] h-[193px]  bg-white absolute">
            <div className="flex flex-col text-orange-600 font-bold p-5">
              <img
                src="/Fotos/Frame.png"
                alt="Mountain_icon_vivala"
                className="w-[62px] h-[64px] ml-5 flex flex-shrink-0"
              />
              <span className="p-2 text-2xl">Nossa Missão</span>
            </div>
            <div className="flex-1 flex-shrink-0 text-gray-600 items-center w-32 h-32 ml-14 p-7 break-words text-2xl">
              <p>
                Ressignificar a relação das pessoas com o Brasil, os biomas e as
                comunidades tradicionais do país.
              </p>
            </div>
          </div>
          <div className="flex mt-10 w-[742px] h-[193px] bg-white absolute">
            <div className="flex flex-col text-orange-600 font-bold p-5 flex-shrink-0">
              <img
                src="/Fotos/Frameyes.png"
                alt="Eye_icon_vivala"
                className="w-[62px] h-[64px] ml-5"
              />
              <span className="p-2 text-2xl">Nossa Visão</span>
            </div>
            <div className="flex-1 text-gray-600 items-center w-32 h-32 ml-14 p-7 break-words text-2xl">
              <p>
                Ressignificar a relação das pessoas com o Brasil, os biomas e as
                comunidades tradicionais do país.
              </p>
            </div>
          </div>
          <div className="flex mt-96 flex-shrink-0 w-[742px] h-[250px] border border-black bg-white absolute">
            <div className="flex flex-col text-orange-600 font-bold p-5">
              <img
                src="/Fotos/hearticon.png"
                alt="Heart_icon_vivala"
                className="w-[62px] h-[64px] ml-5 flex flex-shrink-0"
              />
              <span className="p-2 text-2xl">Nossos Valores</span>
            </div>
            <div className="flex-1 flex-shrink-0 text-gray-600 items-center w-32 h-32 ml-14 p-7 break-words text-xl">
              <ul>
                <li>1. tratar o planeta como nosso maior acionista</li>
                <li>2. Revelar o melhor do nosso potencial</li>
                <li>3. Proporcionar experiencias inesqueciveis</li>
                <li>4. Fortacele o respeito pelo universo</li>
                <li>5. Guiar o caminho do bem</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-3xl ml-60 mb-10 font-semibold">
          Premios e conquistas
        </p>
        <div className="flex justify-center gap-5">
          <div className="flex-none w-2 h-8"></div>
          <div className="w-56 h-52 p-5 border border-gray text-center text-xs shrink">
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
          <div className="grid justify-items-center w-56 h-52 p-5 border border-gray text-center text-xs text-gray-600 font-semibold shrink-0">
            <span>Participação no programa de aceleração Inovativa Brasil</span>
            <img src="/Fotos/inovativa 1.png" alt="inovativa" />
          </div>
          <div className="grid justify-items-center w-56 h-52 p-5 border border-gray text-center text-xs text-gray-600 font-semibold shrink-0">
            <span>
              Escolhida como Young Leaders of America (YLAI), Washington DC,
              Denver, Detroit
            </span>
            <img src="/Fotos/YLAI 1.png" alt="" />
          </div>
          <div className=" w-56 h-52 p-5 grid justify-items-center border border-gray text-center text-xs text-gray-600 font-semibold shrink-0">
            <p>
              Vencedora dos Prêmios Braztoa 2019 e 2020-2022, ONU e Organização
              Mundial de Turismo de Sustentabilidade
            </p>
            <div className="container mx-auto flex justify-center w-20 h-14 gap-2">
              <img src="/Fotos/image 44.png" alt="brazta" />
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
        <div>
          <p className="text-gray-700 font-semibold text-3xl">
            VIVALÁ NA MIDIA
          </p>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-20 container mx-auto">
          <div className="row-span-3 border border-gray-200">
            <img src="/Fotos/image 40.png" alt="familia" />
            <span className="text-orange-600 font-semibold text-2xl p-5">
              Territorio animal
            </span>
            <div className="flex p-5">
              <span>
                Como a Vivalá está potencializando a preservação ambiental no
                Brasil por meio do <br /> Turismo Sustentável
              </span>
            </div>
          </div>
          <div className="col-span-2 border border-gray-200">
            <div className="flex gap-4 text-2xl">
              <img src="/Fotos/image 37.png" alt="Diario do Comercio" />
              <div className="flex flex-col">
                <span className="font-semibold text-orange-600">
                  Diário do Comercio
                </span>
                <span className="text-gray-600 font-normal md:font-normal">
                  Vivalá rende folego ás economias locais
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-2 border border-gray-200">
            <div className="flex gap-4 text-2xl w-3/4">
              <img
                src="/Fotos/Expedição_Lençois Maranhense_222.png"
                alt="lençois maranhenses"
              />
              <div className="flex flex-col">
                <span className="text-orange-600 font-semibold">
                  Nome da mídia
                </span>
                <span className="text-center text-gray-600 font-normal">
                  Título da matéria. Se for maior que 4 linhas fica com 3
                  pontinhos para não quebrar o padrão.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="h-10 w-60 mt-6 border border-orange-500 font-semibold text-white bg-orange-500">
            Confira Mais Matérias
          </button>
        </div>
        <div className="flex justify-center mt-20 relative">
          <img src="/Fotos/_MG_7408 1.png" alt="faça parte do nosso time" />
          <div className="flex p-20 pr-80  text-white absolute">
            <ul>
              <p className="text-4xl font-semibold w-72 h-20">
                Faça parte do nosso time
              </p>
              <li>Mande seu CV para</li>
              <li className="font-bold">contato@vivala.com.br</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full h-1/2 mt-10 md:flex-row flex-col justify-around items-start relative">
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

        <div className="flex justify-between  ml-[800px] p-3 absolute ">
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
          <div className="flex gap-3 ml-10">
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
      </div>
    </>
  );
};

{
  /*    <div className="absolute flex justify-end ml-96 gap-5 py-5">
          <div className="flex gap-2 ml-96">
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
          <div className="flex gap-3 justify-content justify-end py-2">
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
        </div>  */
}
