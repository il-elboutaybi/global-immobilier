import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
// import ReviewerPhoto1 from "../../assets/images/reviewers-imgs/reviewer-photo1.jpg";
// import ReviewerPhoto2 from "../../assets/images/reviewers-imgs/reviewer-photo2.jpg";
// import ReviewerPhoto3 from "../../assets/images/reviewers-imgs/reviewer-photo3.jpg";
// import ReviewerPhoto4 from "../../assets/images/reviewers-imgs/reviewer-photo4.jpg";

const Review = () => {
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
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <section className="">
        {Width < 631 ? (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/10 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold text-black">
                    Ce que nos clients disent
                  </h2>
                  <p className="text-black">
                    Chez Global Immobilier, la satisfaction de nos clients est notre priorité absolue.
                    Nous sommes fiers de l'impact positif de nos services sur nos investisseurs.
                  </p>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-blue-200/30">
                        <p>
                          Global Immobilier a dépassé mes attentes. Leur analyse approfondie
                          du marché m'a permis de réaliser des investissements stratégiques qui
                          ont considérablement augmenté mon portefeuille immobilier.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://avatar.iran.liara.run/public/boy?username=yassine"
                            alt="reviewer profile picture"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">Yassine Benjelloun</p>
                            <p className="text-sm text-gray-400">YB Properties</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-blue-200/60">
                        <p>
                          L'équipe de Global Immobilier s'est montrée incroyablement dévouée
                          tout au long de mon projet. Leur expertise et leur professionnalisme
                          ont été un atout précieux pour trouver la propriété idéale.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://avatar.iran.liara.run/public/girl?username=fatima"
                            alt="reviewer profile picture"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Fatima Zahra Alaoui
                            </p>
                            <p className="text-sm dark:text-gray-400">
                              ImmoCasa
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-blue-200/60">
                        <p>
                          Je recommande vivement Global Immobilier à tout investisseur à
                          la recherche de solutions immobilières innovantes. Leur approche
                          personnalisée a rendu le processus d'investissement fluide et transparent.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://avatar.iran.liara.run/public/boy?username=mohammed"
                            alt="reviewer profile picture"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Mohamed El Idrissi
                            </p>
                            <p className="text-sm dark:text-gray-400">InvestPlus</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-blue-200/30">
                        <p>
                          En tant que primo-accédante, je me suis sentie soutenue et
                          guidée tout au long du processus d'achat. Global Immobilier
                          a su m'accompagner avec patience et a répondu à toutes mes questions.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://avatar.iran.liara.run/public/girl?username=salmatahiri"
                            alt="reviewer profile picture"
                            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Salma Tahiri
                            </p>
                            <p className="text-sm dark:text-gray-400">N/A {"(Individual Investor)"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/10 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
                >
                  <h2 className="text-4xl font-bold text-black">
                    Ce que nos clients disent
                  </h2>
                  <p className="text-black">
                    Chez Global Immobilier, la satisfaction de nos clients est notre priorité absolue.
                    Nous sommes fiers de l'impact positif de nos services sur nos investisseurs.
                  </p>
                </motion.div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="p-6 rounded shadow-md bg-blue-200/30"
                      >
                        <p>
                          Global Immobilier a dépassé mes attentes. Leur analyse approfondie du marché
                          m'a permis de réaliser des investissements stratégiques qui ont considérablement
                          augmenté mon portefeuille immobilier.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://avatar.iran.liara.run/public/boy?username=yassine"
                              alt="reviewer profile picture"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Yassine Benjelloun
                              </p>
                              <p className="text-sm text-gray-400 block">
                                YB Properties
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="p-6 rounded shadow-md bg-blue-200/60"
                      >
                        <p>
                          L'équipe de Global Immobilier s'est montrée incroyablement
                          dévouée tout au long de mon projet. Leur expertise et leur
                          professionnalisme ont été un atout précieux pour trouver la propriété idéale.
                        </p>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://avatar.iran.liara.run/public/girl?username=fatima"
                              alt="reviewer profile picture"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col sm:ml-2 ">
                              <p className="text-lg font-semibold block">
                                Fatima Zahra Alaoui
                              </p>
                              <p className="text-sm text-gray-400 block">
                                ImmoCasa
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="p-6 rounded shadow-md bg-blue-200/60"
                      >
                        <p>
                          Je recommande vivement Global Immobilier à tout investisseur
                          à la recherche de solutions immobilières innovantes. Leur approche
                          personnalisée a rendu le processus d'investissement fluide et transparent.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://avatar.iran.liara.run/public/boy?username=mohammed"
                              alt="reviewer profile picture"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Mohamed El Idrissi
                              </p>
                              <p className="text-sm text-gray-400 block">
                                InvestPlus
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="p-6 rounded shadow-md bg-blue-200/30"
                      >
                        <p>
                          En tant que primo-accédante, je me suis sentie soutenue
                          et guidée tout au long du processus d'achat. Global Immobilier
                          a su m'accompagner avec patience et a répondu à toutes mes questions.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://avatar.iran.liara.run/public/girl?username=salmatahiri"
                              alt="reviewer profile picture"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Salma Tahiri
                              </p>
                              <p className="text-sm text-gray-400 block">
                                N/A {"(Individual Investor)"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </div>
  );
};

export default Review;