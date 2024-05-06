import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { VscGithubAlt } from 'react-icons/vsc';
import { TfiTwitter } from 'react-icons/tfi';
import { RxInstagramLogo } from 'react-icons/rx';
import TeamImage from "../../../assets/images/team.jpg";
import Location from "../../location/Location";


const About = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <div>
      <div className="max-w-screen overflow-hidden font-poppins">
        <div className="h-[80rem] -mb-20 sm:mb-0 bg-gradient-to-b from-gray-100/10 to-gray-200/50 pt-20">
          <div className="mt-20">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold text-[3rem]">
                Votre passerelle vers l'excellence immobilière
              </h1>
            </motion.div>
            <div className="sm:flex sm:justify-between sm:mr-[10%] sm:mt-20 mt-10 ml-10">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-[50%] w-[90%] mb-10 sm:mb-0"
              >
                <img
                  alt="imageAbout"
                  src={TeamImage}
                  className="rounded-2xl sm:toas:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 sm:hover:drop-shadow-xl sm:z-20 sm:mx-auto shadow-lg "
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                <h1 className="text-xl sm:text-3xl sm:font-extrabold font-bold text-blue-500 ml-[-10%] sm:ml-0 mb-10 sm:mb-0">
                  "Nous sommes inspirés par les résultats et motivés par les données."
                </h1>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="block h-screen sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
              <p className="sm:flex justify-center text-3xl hidden ml-[-80%] mb-[-10%] sm:my-24">
                À propos de nous:
              </p>
              <p className="hidden sm:flex border-y-2 py-4 border-y-indigo-900/30 font-semibold sm:ml-[7%] w-[70%] ">
                Chez Global Immobilier, nous fusionnons l'expertise traditionnelle avec l'innovation d'avant-garde.
                Fondée en 2021, notre agence s'est distinguée par son approche unique du marché immobilier.
                Nous nous spécialisons dans la connexion des investisseurs avec des propriétés exceptionnelles,
                offrant des analyses de marché avancées et des stratégies d'investissement personnalisées. <br />
                Notre Mission: <br />
                Montrer la voie dans les solutions immobilières complètes, en veillant à ce que chaque investissement soit aligné
                sur les visions et les objectifs de nos clients. Nous ne vendons pas seulement des propriétés,
                nous créons des opportunités pour les investisseurs de prospérer sur un marché en constante évolution. <br />
                Notre Philosophie: <br />
                Notre philosophie repose sur une compréhension approfondie du marché et des besoins individuels de nos clients.
                Cette approche nous permet d'offrir non seulement des propriétés, mais des solutions sur mesure qui se traduisent
                par des investissements réussis et durables. En choisissant Global Immobilier, nos clients bénéficient
                d'un partenaire engagé dans l'excellence, l'intégrité et l'innovation dans chaque aspect de l'investissement immobilier.
              </p>
              <p className="mt-16 text-lg font-semibold sm:hidden block mb-10">
                À propos de nous:
              </p>
              <p className="flex sm:hidden mt-4 mx-6">
                Découvrez le summum de l'investissement immobilier avec Global Immobilier.
                Notre équipe d'experts allie expertise traditionnelle et innovation de pointe
                pour vous connecter à des propriétés exceptionnelles et des stratégies d'investissement personnalisées.
                Devenez partenaire et débloquez un monde d'opportunités immobilières.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        <div>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                Notre équipe
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                L'équipe de talent qui rend tout possible
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatar.iran.liara.run/public/boy?username=YoussefBelarbi"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Youssef Belarbi
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Directeur Général
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Youssef supervise l'ensemble des opérations de Global Immobilière, en veillant à la
                        stratégie globale de l'agence. Son expertise du marché et son leadership visionnaire
                        guident notre équipe vers la réussite.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatar.iran.liara.run/public/girl?username=salmaidrissi"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Salma Idrissi
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Responsable Marketing
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Salma élabore des campagnes marketing percutantes qui mettent en valeur
                        nos propriétés exceptionnelles. Elle possède une compréhension approfondie
                        des tendances du marché et attire les meilleurs investisseurs.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatar.iran.liara.run/public/boy?username=karemalami"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Karim Alami
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Analyste Financier
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Karim analyse les données financières pour identifier les investissements les plus rentables.
                        Ses prévisions précises et son sens aigu des affaires aident nos clients à prendre des décisions éclairées.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatar.iran.liara.run/public/girl?username=nadiabenjelloun"
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Nadia Benjelloun
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Spécialiste de la Relation Client
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Nadia crée des liens durables avec nos clients. Sa communication exceptionnelle
                        et sa capacité à comprendre les besoins individuels garantissent une expérience client inégalée.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatar.iran.liara.run/public/boy?username=omartazi"
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Omar Tazi
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Consultant en Investissement
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Omar développe des stratégies d'investissement personnalisées qui répondent aux
                        objectifs financiers à long terme de nos clients. Son expertise en matière de portefeuille
                        aide nos investisseurs à atteindre leurs aspirations en matière d'immobilier.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatar.iran.liara.run/public/girl?username=fatimazahrabennani"
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Fatima Zahra Bennani
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Négociatrice
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Fatima Zahra excelle dans l'art de la négociation. Son approche habile et fondée
                        sur les données permet d'obtenir les meilleures conditions pour nos clients, maximisant
                        ainsi la valeur de leurs investissements.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Location />
      </div>
    </div>
  );
};

export default About;