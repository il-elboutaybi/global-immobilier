import Card from "./Card";
import { useEffect, useRef } from "react";
import CardImage1 from "../../assets/images/cards-icons/cards-img1.png";
import CardImage2 from "../../assets/images/cards-icons/cards-img2.png";
import CardImage3 from "../../assets/images/cards-icons/cards-img3.png";
import { useAnimation, useInView, motion } from "framer-motion";

const Cards = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="max-w-screen overflow-x-hidden font-poppins">
        <div className="w-full py-[10rem] px-4 bg-white -mt-28">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold text-center sm:text-5xl mt-[4%] text-black mb-2.5">
              Pourquoi choisir Global Immobilier ?
            </h2>
          </div>
          <p className="flex text-xl justify-center sm:mb-24 mb-16 text-center mt-6 sm:mt-0 ">
            Notre succès repose sur un engagement inébranlable envers l'excellence,
            l'innovation et des solutions immobilières sur mesure.
            En nous choisissant comme partenaire, vous bénéficiez d'avantages distinctifs qui
            vous assurent une expérience d'investissement exceptionnelle.
          </p>
          <>
            {Width < 631 ? (
              <>
                <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 align-items-end gap-8">
                  <div>
                    <Card
                      image={CardImage1}
                      title={"Expertise Approfondie du Marché"}
                      feature1={"Analyses de tendances détaillées pour des stratégies ciblées."}
                      feature2={"Connaissance approfondie des opportunités immobilières rentables."}
                      feature3={"Évaluations précises pour des transactions réussies."}
                      feature4={"Compréhension des législations immobilières locales."}
                      feature5={"Identification des facteurs de croissance du marché."}
                      feature6={"Réseau étendu de professionnels de l'immobilier."}
                    />
                  </div>
                  <div>
                    <Card
                      image={CardImage2}
                      title={"Approche Innovante & Personnalisée"}
                      feature1={"Stratégies d'investissement adaptées à vos objectifs précis."}
                      feature2={"Solutions immobilières avant-gardistes."}
                      feature3={"Utilisation de technologies de pointe dans notre processus."}
                      feature4={"Adaptation aux évolutions du marché."}
                      feature5={"Communication transparente et régulière avec nos clients."}
                      feature6={"Priorité accordée à la satisfaction de nos clients."}
                      marginMiddle={"md:my-6"}
                    />
                  </div>
                  <div>
                    <Card
                      image={CardImage3}
                      title={"Intégrité et Transparence"}
                      feature1={"Pratiques commerciales éthiques et honnêtes."}
                      feature2={"Divulgation proactive des informations pertinentes."}
                      feature3={"Protection de vos intérêts et de votre confidentialité."}
                      feature4={"Conseils impartiaux basés sur vos besoins."}
                      feature5={"Tarifs clairs et compétitifs."}
                      feature6={"Respect des normes et réglementations de l'industrie."}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                  <motion.div
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <Card
                      image={CardImage1}
                      title={"Expertise Approfondie du Marché"}
                      feature1={"Analyses de tendances détaillées pour des stratégies ciblées."}
                      feature2={"Connaissance approfondie des opportunités immobilières rentables."}
                      feature3={"Évaluations précises pour des transactions réussies."}
                      feature4={"Compréhension des législations immobilières locales."}
                      feature5={"Identification des facteurs de croissance du marché."}
                      feature6={"Réseau étendu de professionnels de l'immobilier."}
                    />
                  </motion.div>
                  <motion.div
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.5, delay: 0.65 }}
                  >
                    <Card
                      image={CardImage2}
                      title={"Approche Innovante & Personnalisée"}
                      feature1={"Stratégies d'investissement adaptées à vos objectifs précis."}
                      feature2={"Solutions immobilières avant-gardistes."}
                      feature3={"Utilisation de technologies de pointe dans notre processus."}
                      feature4={"Adaptation aux évolutions du marché."}
                      feature5={"Communication transparente et régulière avec nos clients."}
                      feature6={"Priorité accordée à la satisfaction de nos clients."}
                      marginMiddle={"md:my-6"}
                    />
                  </motion.div>
                  <motion.div
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <Card
                      image={CardImage3}
                      title={"Intégrité et Transparence"}
                      feature1={"Pratiques commerciales éthiques et honnêtes."}
                      feature2={"Divulgation proactive des informations pertinentes."}
                      feature3={"Protection de vos intérêts et de votre confidentialité."}
                      feature4={"Conseils impartiaux basés sur vos besoins."}
                      feature5={"Tarifs clairs et compétitifs."}
                      feature6={"Respect des normes et réglementations de l'industrie."}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};
export default Cards;
