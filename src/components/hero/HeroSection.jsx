import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import HeroImage from '../../assets/images/hero-image.jpg';
import StarsImage from '../../assets/images/stars.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className='font-poppins overflow-x-hidden'>
      <div
        className="relative pt-[120px] pb-[110px] lg:pt-[150px] px-10"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <motion.div variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 }
                }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5, delay: 0.25 }}>
                  <h1
                    className="mb-5 font-bold !leading-[1.208] text-transparent bg-clip-text bg-gradient-to-tr from-[#477998] to-[#5CCE61] sm:text-3xl text:2xl"
                  >
                    Investissez intelligemment, <br />
                    <span className='sm:text-7xl text-5xl'>Créez votre patrimoine.</span>
                  </h1>
                  <p
                    className="mb-8 max-w-[480px] text-body-color dark:text-dark-6 text-sm sm:text-base"
                  >
                    Chez Global Immobilier, nous vous accompagnons dans la réalisation de vos objectifs immobiliers.
                    Que vous soyez un investisseur chevronné ou un premier acheteur, nous mettons à votre disposition
                    notre expertise et notre connaissance approfondie du marché pour vous aider à trouver la propriété idéale.
                  </p>
                </motion.div>
                <motion.div variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -75 }
                }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5, delay: 0.25 }}>
                  <ul className="flex flex-wrap items-center">
                    <li>
                      <Link
                        to="/contact"
                        className="bg-blue-600/80 inline-flex hover:bg-[#3D925A] items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                      >
                        Contactez-nous
                      </Link>
                    </li>
                    <li>
                      <Link to="/services"
                        className="text-[#08090A] inline-flex items-center justify-center py-3 px-5 text-center text-base hover:underline font-medium hover:text-teal-500">
                        Découvrir nos Services <span className='ml-2 text-xl'><IoIosArrowDroprightCircle /></span>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" }
                  }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="relative z-10 inline-block pt-11 lg:pt-0 mt-6">
                  <img
                    src={HeroImage}
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[5%]"
                  />
                  <img src={StarsImage}
                    alt="stars"
                    className='z-20 w-28 absolute mt-[-98%] right-[-5%] opacity-70 hover:opacity-100'
                  />
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
