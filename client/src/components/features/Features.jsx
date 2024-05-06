import TrendsIcon from "../../assets/images/features-icons/trends.png";
import MarketIcon from "../../assets/images/features-icons/market.png";
import CompanyVisionIcon from "../../assets/images/features-icons/company-vision.png";
import NicheIcon from "../../assets/images/features-icons/niche.png";
import InvestmentIcon from "../../assets/images/features-icons/investment.png";
import AnalysisIcon from "../../assets/images/features-icons/analysis.png";
import FeatureImg1 from "../../assets/images/features-imgs/featureImg-1.jpg";
import FeatureImg2 from "../../assets/images/features-imgs/featureImg-2.jpg";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const Features = () => {

  const { innerWidth: width } = window;
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView, mainControlls]);

  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <div className='max-w-screen overflow-x-hidden font-poppins'>
        {/* Features Section */}
        {width < 631 ?
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Analyse du marché</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Votre clé vers des investissements immobiliers intelligents.</p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Votre succès immobilier commence par une stratégie solide</h3>
                  <p className="mt-3 text-lg dark:text-gray-600">Chez Global Immobilier, nous comprenons que le succès de votre projet immobilier repose sur une planification méticuleuse et une exécution efficace. {"C'est"} pourquoi nous offrons une gamme complète de services sur mesure pour vous accompagner à chaque étape du processus, de {"l'"}analyse approfondie du marché à la gestion efficace de vos investissements.</p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                          <img src={TrendsIcon} alt="Analyse de marché détaillée" />
                        </div>
                      </div>
                      <div
                        className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Tendances et opportunités</h4>
                        <p className="mt-2 dark:text-gray-600">Notre équipe {"d'"}analystes chevronnés scrute les tendances du marché immobilier, les fluctuations économiques et les changements démographiques pour identifier les opportunités {"d'"}investissement les plus prometteuses.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                          <img src={MarketIcon} alt="Planification d'affaires immobilières" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Compréhension du marché</h4>
                        <p className="mt-2 dark:text-gray-600">Nous possédons une connaissance approfondie des différents segments du marché, des propriétés résidentielles aux commerciales et industrielles, en passant par les développements immobiliers.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                          <img src={CompanyVisionIcon} alt="Conseils d'achats et de gestion immobilière" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Vision globale</h4>
                        <p className="mt-2 dark:text-gray-600">Nous adoptons une approche globale qui nous permet {"d'"}anticiper les mouvements du marché et de proposer des stratégies {"d'"}investissement diversifiées et adaptées aux tendances futures.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true"
                  className="mt-10 lg:mt-0">
                  <img
                    src={FeatureImg1}
                    alt="first feature image"
                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
              <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Investissez dans {"l'"}avenir avec des opportunités uniques et visionnaires</h3>
                    <p className="mt-3 text-lg dark:text-gray-600">Chez Global Immobilier, nous ne nous contentons pas de vous proposer des investissements rentables. Nous nous engageons à vous offrir des opportunités uniques et visionnaires qui vous permettront de garder une longueur {"d'"}avance sur le marché immobilier.</p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <img src={NicheIcon} alt="Niches et marchés émergents" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Niches et marchés émergents</h4>
                          <p className="mt-2 dark:text-gray-600">Nous identifions les niches et les marchés émergents porteurs, vous offrant ainsi un accès exclusif à des opportunités {"d'"}investissement à fort potentiel.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <img src={InvestmentIcon} alt="Investissements à l'épreuve du futur" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Investissements à {"l'"}épreuve du futur</h4>
                          <p className="mt-2 dark:text-gray-600">Nous sélectionnons des investissements non seulement rentables, mais aussi pérennes, garantissant ainsi la solidité de votre patrimoine à long terme.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <img src={AnalysisIcon} alt="Analyse détaillée" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Analyse détaillée</h4>
                          <p className="mt-2 dark:text-gray-600">Notre analyse du marché est approfondie et personnalisée, prenant en compte vos objectifs spécifiques et les caractéristiques de chaque projet immobilier.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                    <img
                      src={FeatureImg2}
                      alt="second feature image"
                      className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section > :
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Analyse du marché</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Votre clé vers des investissements immobiliers intelligents.</p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Votre succès immobilier commence par une stratégie solide</h3>
                  <p className="mt-3 text-lg dark:text-gray-600">Chez Global Immobilier, nous comprenons que le succès de votre projet immobilier repose sur une planification méticuleuse et une exécution efficace. {"C'est"} pourquoi nous offrons une gamme complète de services sur mesure pour vous accompagner à chaque étape du processus, de {"l'"}analyse approfondie du marché à la gestion efficace de vos investissements.</p>
                  <div className="mt-12 space-y-12">
                    <motion.div
                      className="flex"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.15 }}>
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                          <img src={TrendsIcon} alt="Analyse de marché détaillée" />
                        </div>
                      </div>
                      <div
                        className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Tendances et opportunités</h4>
                        <p className="mt-2 dark:text-gray-600">Notre équipe {"d'"}analystes chevronnés scrute les tendances du marché immobilier, les fluctuations économiques et les changements démographiques pour identifier les opportunités {"d'"}investissement les plus prometteuses.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.35 }}>
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                          <img src={MarketIcon} alt="Planification d'affaires immobilières" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Compréhension du marché</h4>
                        <p className="mt-2 dark:text-gray-600">Nous possédons une connaissance approfondie des différents segments du marché, des propriétés résidentielles aux commerciales et industrielles, en passant par les développements immobiliers.</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.55 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                          <img src={CompanyVisionIcon} alt="Conseils d'achats et de gestion immobilière" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Vision globale</h4>
                        <p className="mt-2 dark:text-gray-600">Nous adoptons une approche globale qui nous permet {"d'"}anticiper les mouvements du marché et de proposer des stratégies {"d'"}investissement diversifiées et adaptées aux tendances futures.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  aria-hidden="true"
                  className="mt-10 lg:mt-0"
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <img
                    src={FeatureImg1}
                    alt="first feature image"
                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </motion.div>
              </div>
              <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Investissez dans {"l'"}avenir avec des opportunités uniques et visionnaires</h3>
                    <p className="mt-3 text-lg dark:text-gray-600">Chez Global Immobilier, nous ne nous contentons pas de vous proposer des investissements rentables. Nous nous engageons à vous offrir des opportunités uniques et visionnaires qui vous permettront de garder une longueur {"d'"}avance sur le marché immobilier.</p>
                    <div className="mt-12 space-y-12">
                      <motion.div
                        className="flex"
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: -75 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.15 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <img src={NicheIcon} alt="Niches et marchés émergents" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Niches et marchés émergents</h4>
                          <p className="mt-2 dark:text-gray-600">Nous identifions les niches et les marchés émergents porteurs, vous offrant ainsi un accès exclusif à des opportunités {"d'"}investissement à fort potentiel.</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex"
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: -75 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.35 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <img src={InvestmentIcon} alt="Investissements à l'épreuve du futur" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Investissements à {"l'"}épreuve du futur</h4>
                          <p className="mt-2 dark:text-gray-600">Nous sélectionnons des investissements non seulement rentables, mais aussi pérennes, garantissant ainsi la solidité de votre patrimoine à long terme.</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex"
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: -75 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.55 }}>
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md">
                            <img src={AnalysisIcon} alt="Analyse détaillée" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Analyse détaillée</h4>
                          <p className="mt-2 dark:text-gray-600">Notre analyse du marché est approfondie et personnalisée, prenant en compte vos objectifs spécifiques et les caractéristiques de chaque projet immobilier.</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, x: -75 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <img
                      src={FeatureImg2}
                      alt="second feature image"
                      className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section >}
      </div >
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </>
  )
}

export default Features;
