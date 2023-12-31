import Link from "next/link";
import { Footer } from "./Footer";
import SlideBar from "./SlideBar";
import { NewFooter } from "./NewFooter";

export const Menu = () => {
  return (
    <>
      <SlideBar />
      <div className="container mx-auto">
        <div>
          <p className="mt-10 text-center text-gray-600 text-4xl">
            Nosso objetivo é transformar o Brasil no maior destino de turismo
            sustentável do mundo criando expedições que sejam transformadoras
            para os viajantes, as comunidades e o planeta.
          </p>
        </div>
        <p className="flex flex-wrap py-10 mx-4 text-gray-600 md:text-2xl text-3xl font-semibold md:flex md:flex-row">
          VIAJANDO COM A VIVALÁ, VOCE:
        </p>
        <div className="flex justify-center items-center">
          <img src="/Fotos/infografico.png" alt="foto-grande" />
        </div>
        <p className="text-xl mx-4 mb-3 lg:text-3xl 2xl:text-4xl 2xl:mb-6 font-semibold text-gray-500 mt-10">
          VIVALÁ EM NÚMEROS
        </p>
        <div className="flex justify-center items-center">
          <div className="justify-items-center relative lg:1/6">
            <div className="absolute mr-14 w-10 h-10 sm:w-full sm:h-full">
              <img src="/Fotos/Layer_1.png" alt="icone-1" />
            </div>
            <div className="flex flex-col  absolute ml-10 text-white font-semibold w-28 h-24 sm:py-80 md:text-base sm:text-sm md:w-20 md:py-48 md:mx-5 lg:py-64 lg:mx-7 lg:text-xl xl:py-80">
              <p className="w-28 h-24">
                <span className="font-bold text-white text-4xl">1716</span>{" "}
                <br /> viajantes de <br /> 10 países
              </p>
            </div>
            <img src="/Fotos/groupfoto.png" alt="the first group vivala" />
          </div>
          <div className="grid justify-items-center relative">
            <div className="flex flex-wrap absolute h-32 md:1/4 ml-16 p-3">
              <img src="/Fotos/Layer_2.png" alt="icone-2" />
            </div>
            <div className="flex flex-col absolute py-80 text-white font-semibold tracking-wide w-28 md:text-base sm:text-sm md:py-48 md:mx-24 lg:py-64 lg:mx-7 lg:text-xl xl:py-80">
              <span className="font-bold text-4xl">111</span>
              <p>Expedições em grupo</p>
            </div>
            <img src="/Fotos/groupfoto2.png" alt="foto-grupo-vivala" />
          </div>
          <div className="grid justify-items-center relative ">
            <div className="absolute w-8 h-8 p-2 sm:w-28 md:h-28 pt-8">
              <img src="/icons/circlemoney.svg" alt="circle-money" />
              <img src="/icons/house.svg" alt="casa-vivala" />
            </div>
            <div className="flex flex-col container mx-auto absolute py-80 text-white w-28 md:text-base sm:text-sm md:py-44 md:ml-5 lg:py-60 lg:mx-7 lg:text-xl xl:py-72">
              <ul>
                <p className="font-bold text-2xl">R$ 1.7M</p>
                <li>injetados nas</li>
                <li>economias</li>
                <li>locais</li>
              </ul>
            </div>
            <img src="/Fotos/groupfoto3.png" alt="duas-pessoas-vivalá" />
          </div>
          <div className="grid justify-items-center relative md:flex sm:hidden">
            <div className="flex flex-wrap absolute mr-10 p-3 py-10">
              <img src="/icons/timevivala.svg" alt="icons-timevivala" />
            </div>
            <div className="flex flex-wrap absolute py-80 text-white w-28 ml-10 text-xl md:py-48 md:mx-5 md:text-base lg:py-64 lg:mx-7 lg:text-xl xl:py-80">
              <p>
                <span className="font-bold text-4xl">8152</span>
                <br />
                horas de volunturismo
              </p>
            </div>
            <img
              src="/Fotos/vivianepediatria2.png"
              alt="viviane-pediatria-vivala"
            />
          </div>
          <div className="grid justify-items-center relative md:flex sm:hidden xl:flex 2xl:flex">
            <div className="flex flex-wrap absolute mr-5 py-7">
              <img src="/icons/hands.svg" alt="hands vivala" />
            </div>
            <div className="flex flex-wrap absolute text-white container mx-auto py-80 w-32 ml-10 md:text-base sm:text-sm md:py-44 md:mx-5 lg:py-60 lg:mx-7 lg:text-xl xl:py-72">
              <ul>
                <p className="font-bold text-4xl">201</p>
                <li>negocios</li>
                <li>familiares</li>
                <li>mentorados</li>
              </ul>
            </div>
            <img src="/Fotos/image58.png" alt="" />
          </div>
          <div className="grid justify-items-center relative md:flex sm:hidden xl:flex 2xl:flex">
            <div className="flex flex-wrap absolute mr-10 py-10">
              <img src="/icons/treevivala.svg" alt="arvore-vivala" />
            </div>
            <div className="flex flex-wrap absolute text-white container mx-auto py-80 ml-10 w-32 text-xl md:w-28 md:text-base sm:text-sm md:py-44 md:mx-5 lg:py-60 lg:mx-7 lg:text-xl xl:py-72">
              <ul>
                <p className="font-bold text-4xl">16</p>
                <li>Destinos</li>
                <li>em áreas</li>
                <li>preservadas</li>
              </ul>
            </div>
            <img src="/Fotos/groupfoto4.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="h-10 w-40 mt-6 border border-orange-500 font-semibold text-orange-500">
            <Link href="#">Saiba Mais</Link>
          </button>
        </div>
        <div className="flex justify-center items-center py-10">
          <img src="/Fotos/moeda.png" alt="foto-mundo" />
          <span className="text-gray-600 text-2xl">
            Acreditamos que o turismo sustentável <br /> seja fator chave para o
            desenvolvimento <br /> socioambiental e empoderamento de <br />
            comunidades brasileiras.
          </span>
        </div>
        <div className="h-screen flex justify-center items-center mt-10 relative ">
          <img
            src="/Fotos/2017-09-18-photo.png"
            alt="amazonia vivala"
            className="w-full md:w-full sm:w-full"
          />
          <div className="flex mb-96 flex-shrink-0 2xl:w-[1000px] 2xl:mb-[500px] xl:w-[900px] xl:mb-[600px] shadow-lg bg-white absolute sm:mt-48 sm:w-[450px] sm:h-[-800px] md:w-[742px] md:h-[150px] lg:h-[200px] lg:mb-[500px] xl-h[300px]">
            <div className="flex flex-col text-orange-600 font-bold p-5 md:flex md:flex-col md:mb-4">
              <img
                src="/Fotos/Frame.png"
                alt="Mountain_icon_vivala"
                className="w-[62px] h-[64px] ml-5 flex flex-shrink"
              />
              <span className="p-2 sm:text-sm md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl ">
                Nossa Missão
              </span>
            </div>
            <div className="flex-1 flex-shrink-0 text-gray-500 items-center sm:w-44 sm:h-32 md:w-32 md:h-32 ml-14 p-7 break-words text-2xl">
              <p className="sm:text-base font-semibold md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
                Ressignificar a relação das pessoas com o Brasil, os biomas e as
                comunidades tradicionais do país.
              </p>
            </div>
          </div>
          <div className="flex mt-10 2xl:w-[1000px] h-[193px] 2xl:mb-20 xl:w-[900px] xl:mb-44 lg:mb-28 xl:h-40 shadow-lg bg-white absolute sm:w-[450px] sm:h-[-800px] sm:mt-48 md:w-[742px] md:h-[150px] md:mt-66">
            <div className="flex flex-col text-orange-600 font-bold p-5 flex-shrink-0">
              <img
                src="/Fotos/Frameyes.png"
                alt="Eye_icon_vivala"
                className="w-[62px] h-[64px] ml-5 flex-shrink"
              />
              <span className="p-2 sm:text-sm md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl">
                Nossa Visão
              </span>
            </div>
            <div className="flex-1 text-gray-500 items-center w-32 h-32 ml-14 p-7 break-words text-2xl">
              <p className="sm:text-base font-semibold md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
                Transformar o Brasil no maior destino de turismo sustentavél do
                planeta
              </p>
            </div>
          </div>
          <div className="flex xl:mt-[400px] 2xl:mt-[600px] lg:mt-96 md:mt-96 sm:mt-[400px] flex-shrink lg:w-[742px] lg:h-[250px] xl:w-[900px] xl:h-[300px] xl:flex 2xl:w-[1000px] 2xl:h-96 shadow-lg bg-white absolute lg:-my-40 sm:w-[-450px] sm:h-[-800px] sm:-my-40 md:w-[742px] md:h-[250px] md:-my-[250px]">
            <div className="flex flex-col text-orange-600 font-bold p-5">
              <img
                src="/Fotos/hearticon.png"
                alt="Heart_icon_vivala"
                className="sm:w-[64px] sm:[64px] md:h-20 md:w-20 xl:w-24 xl:h-24 ml-5 flex flex-shrink-0"
              />
              <span className="p-2 sm:text-sm md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl">
                Nossos Valores
              </span>
            </div>
            <div className="flex-1 flex-shrink-0 text-gray-500 items-center sm:w-96 md:w-32 h-32 ml-14 p-7 break-words text-xl ">
              <ul className="sm:text-sm font-semibold md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl">
                <li>1. tratar o planeta como nosso maior acionista</li>
                <li>2. Revelar o melhor do nosso potencial</li>
                <li>3. Proporcionar experiencias inesqueciveis</li>
                <li>4. Fortacele o respeito pelo universo</li>
                <li>5. Guiar o caminho do bem</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-600 sm:py-36 md:py-36 text-3xl 2xl:py-32 xl:py-36 ml-60 font-semibold">
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
          <div className="grid justify-items-center w-56 h-52 p-5 border border-gray text-center text-xs text-gray-600 font-semibold shrink">
            <span>Participação no programa de aceleração Inovativa Brasil</span>
            <img src="/Fotos/inovativa 1.png" alt="inovativa" />
          </div>
          <div className="grid justify-items-center w-56 h-52 p-5 border border-gray text-center text-xs text-gray-600 font-semibold shrink">
            <span>
              Escolhida como Young Leaders of America (YLAI), Washington DC,
              Denver, Detroit
            </span>
            <img src="/Fotos/YLAI 1.png" alt="" />
          </div>
          <div className="sm:hidden w-56 h-52 p-5 md:grid md:justify-items-center border border-gray text-center text-xs text-gray-600 font-semibold shrink">
            <p>
              Vencedora dos Prêmios Braztoa 2019 e 2020-2022, ONU e Organização
              Mundial de Turismo de Sustentabilidade
            </p>
            <div className="flex gap-2 sm:hidden md:flex md:justify-center md:items-center lg:justify-center lg:items-center xl:justify-center xl:items-center">
              <img
                src="/Fotos/image 44.png"
                alt="brazta"
                className="sm:w-[15%] md:h-[15%] md:w-[25%] md:h-[45%] lg:w-[30%] lg:h-[30%] xl:w-[40%] xl:h-[40%] 2xl:w-[50%] 2xl:h-[50%]"
              />
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
        <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col gap-4 mt-20 sm:flex sm:flex-col md:flex md:flex-col">
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
              <img
                src="/Fotos/image 37.png"
                alt="Diario do Comercio"
                className="float-left"
              />
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
            <div className="lg:flex gap-4 text-2xl">
              <img
                src="/Fotos/Expedição_Lençois Maranhense_222.png"
                alt="lençois maranhenses"
                className="float-left"
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
      {/* FOOTER*/}
      <div className="sm:hidden md:flex">
        <Footer />
      </div>
      <div className="sm:flex sm:flex-col md:hidden">
        <NewFooter />
      </div>
    </>
  );
};
