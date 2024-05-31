import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { VscGithubAlt } from 'react-icons/vsc';
import { TfiTwitter } from 'react-icons/tfi';
import { RxInstagramLogo } from 'react-icons/rx';
import TeamImage from "../../../assets/images/team.jpg";
import Location from "../../location/Location";
import { useLocation } from "react-router-dom";


const About = () => {
  const pathname = useLocation();
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        <Location />
      </div>
    </div>
  );
};

export default About;