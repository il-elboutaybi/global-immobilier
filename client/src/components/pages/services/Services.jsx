import ServicesIcon1 from "../../../assets/images/services-icons/services-1.png"
import ServicesIcon2 from "../../../assets/images/services-icons/services-2.png";
import ServicesIcon3 from "../../../assets/images/services-icons/services-3.png";
import ServicesIcon4 from "../../../assets/images/services-icons/services-4.png";
import Features from "../../features/Features";

const Services = () => {
  return (
    <>
      <div className="max-w-screen overflow-hidden font-poppins">
        <div className="sm:mt-36 mt-24">
          <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-5xl text-center">
            Nos services d'investissement immobilier
          </h1>
        </div>
        <div className="pb-16">
          <dh-component>
            <section className="max-w-8xl mx-auto container bg-white pt-16">
              <div className="">
                <div
                  role="contentinfo"
                  className="flex items-center flex-col px-4"
                >
                  <p
                    tabIndex={0}
                    className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
                  >
                    INVESTISSEZ AUJOURD'HUI ET
                  </p>
                  <h1
                    tabIndex={0}
                    className=" text-3xl sm:text-5xl font-extrabold text-center leading-10 text-gray-800 sm:w-[70%] w-[95%] pt-4"
                  >
                    profitez des tendances émergentes du marché.
                  </h1>
                </div>
                <div
                  tabIndex={0}
                  aria-label="group of cards"
                  className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
                >
                  <div
                    tabIndex={0}
                    aria-label="card 1"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={ServicesIcon1} alt="drawer" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                      >
                        Analyse de marché détaillée
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Ce service comprend une analyse approfondie du projet immobilier du
                        client, évaluant sa viabilité sur le marché cible.
                        Nous étudions les tendances, la demande, la concurrence et les prix
                        pour fournir des stratégies personnalisées et améliorer les chances de
                        succès du projet.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 2"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={ServicesIcon2} alt="check" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Planification d'affaires immobilières
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Nous élaborons un plan d'affaires complet pour le projet, incluant des
                        projections financières et des stratégies de marketing spécifiques.
                        Ce plan traite de la définition des objectifs, de l'identification du public
                        cible et établit un plan d'action détaillé pour la commercialisation et la
                        vente du projet
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 3"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={ServicesIcon3} alt="html tag" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Conseils d'achats et de gestion immobilière.
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Nous offrons des conseils experts dans l'achat et la gestion de biens
                        immobiliers, cela inclut des conseils sur la sélection et la négociation
                        de propriétés, ainsi que des stratégies pour une gestion efficace des
                        propriétés, y compris les aspects de maintenance, légaux et fiscaux,
                        pour maximiser le retour sur investissement.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 4"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={ServicesIcon4} alt="monitor" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Services de Marketing et Marketing Digitale
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Ce service est conçu pour maximiser la visibilité et l'attractivité des
                        propriétés en utilisant des stratégies numériques avancées.
                        L'objectif est d'atteindre un public large et approprié, augmentant
                        ainsi les chances de succès sur le marché de l'immobilier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </dh-component>
        </div>
        <Features />
        <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
          <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
            Depuis plus de 3 ans, nous fournissons des services{" "}
            <br className="md:block hidden" />
            Dans le monde entier.
          </h1>
          <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img
              src="https://i.ibb.co/KjrPCyW/map.png"
              alt="world map image"
              className="w-full xl:h-full h-96 object-fill sm:block hidden"
            />
            <img
              src="https://i.ibb.co/SXKj9Mf/map-bg.png"
              alt="mobile-image"
              className="sm:hidden -mt-10 block w-full h-96 object-fill absolute z-0"
            />
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
              <p className="text-3xl font-semibold text-gray-800">20+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Sociétés accompagnées
              </p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
              <p className="text-3xl font-semibold text-gray-800">15%</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Augmentation moyenne des performances
              </p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
              <p className="text-3xl font-semibold text-gray-800">70%</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Sociétés ayant renouvelé leur achat
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      </div>
    </>
  );
};

export default Services;