import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className='font-poppins'>
      <div
        className="relative bg-white dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px] px-10"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1
                  className="mb-5 font-bold !leading-[1.208] text-transparent bg-clip-text bg-gradient-to-tr from-[#477998] to-[#5CCE61] sm:text-[42px] lg:text-[40px] xl:text-4.2xl"
                >
                  Investissez intelligemment, <br />
                  <span className='text-7xl'>Créez votre patrimoine.</span>
                </h1>
                <p
                  className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6"
                >
                  Chez Global Immobilière, nous vous accompagnons dans la réalisation de vos objectifs immobiliers.
                  Que vous soyez un investisseur chevronné ou un premier acheteur, nous mettons à votre disposition
                  notre expertise et notre connaissance approfondie du marché pour vous aider à trouver la propriété idéale.
                </p>
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
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
