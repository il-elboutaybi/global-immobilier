import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from "react-router-dom";

const CallToAction = () => {
  const ref = useRef();
  const isInView = useInView(ref)
  const mainControlls = useAnimation(isInView);

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible")
    }
  }, [isInView])
  return (
    <div>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <>
        <section className="py-20 lg:py-[120px] bg-gray-100/50 font-poppins">
          <div className="container mx-auto">
            <div className="bg-blue-800 relative z-10 sm:-mt-10 sm:-mb-10 overflow-x-hidden rounded py-12 px-8 md:p-[70px]">
              <div className="-mx-4 flex flex-wrap items-center">
                <motion.div
                  ref={ref}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -75 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="w-full px-4 lg:w-1/2"
                >
                  <span className="mb-2 text-base font-semibold text-white">
                    Découvrez comment nous pouvons transformer vos objectifs immobiliers en réalité.
                  </span>
                  <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                    Prenez rendez-vous dès
                    <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      {" "}aujourd'hui.
                    </span>
                  </h2>
                </motion.div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="flex sm:flex-wrap sm:justify-end">
                    <motion.div
                      ref={ref}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 75 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.4, delay: 0.2 }}>
                    </motion.div>
                    <motion.div
                      ref={ref}
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 75 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      {" "}
                      <Link
                        to="/contact"
                        className="my-1 inline-block rounded bg-[#3D925A] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-80 md:px-9 lg:px-6 xl:px-9"
                      >
                        Contactez-nous
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div>
                <span className="absolute top-0 left-0 z-[-1]">
                  <svg
                    width="189"
                    height="162"
                    viewBox="0 0 189 162"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="16"
                      cy="-16.5"
                      rx="173"
                      ry="178.5"
                      transform="rotate(180 16 -16.5)"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-157"
                        y1="-107.754"
                        x2="98.5011"
                        y2="-106.425"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0.07" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="191"
                    height="208"
                    viewBox="0 0 191 208"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="173"
                      cy="178.5"
                      rx="173"
                      ry="178.5"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-3.27832e-05"
                        y1="87.2457"
                        x2="255.501"
                        y2="88.5747"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0.07" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </div>
  );
};

export default CallToAction;