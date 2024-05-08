import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Footer = () => {

  const sendEmail = (e) => {

    e.preventDefault();
    e.persist();

    const inputField = e.target.querySelector('input[type="email"]');
    
    if (!inputField.value) {
      toast.error("Le champ est vide. Veuillez saisir un message.");
      return;
    }

    emailjs
      .sendForm(
        "service_r5bvgyk",
        "template_ox3up0t",
        e.target,
        "7aCKLCzGFOLE9TDS0"
      )
      .then(
        (result) => {
          console.log("message envoyé avec succès!")
          toast.success("message envoyé avec succès")
        },
        (error) => {
          toast.error("Quelque chose c'est mal passé. Merci d'essayer plus tard");
          console.log("Quelque chose c'est mal passé. Merci d'essayer plus tard")
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <div className="sm:flex justify-between py-10 px-8 grid bg-gray-200">
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#477998] to-[#5CCE61] w-full text-3xl font-bold">
            Global Immobilier
          </h1>
          <p className="py-4">
            Fondée en 2021, notre agence s'impose par son approche unique du marché.
            Nous connectons les investisseurs avec des propriétés d'exception grâce à
            une expertise pointue et des stratégies d'investissement personnalisées.
          </p>
          <div className="flex md:w-[75%] justify-around my-6">
            <span className='text-[#477998]/70 hover:text-[#477998]'><FaFacebookSquare size={30} className="cursor-pointer " /></span>
            <span className='text-[#477998]/70 hover:text-[#477998]'><FaInstagram size={30} className="cursor-pointer " /></span>
            <span className='text-[#477998]/70 hover:text-[#477998]'><FaTwitterSquare size={30} className="cursor-pointer " /></span>
          </div>
        </div>
        <div className="sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
          <div>
            <h1 className="sm:w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2">
              Restez informé des dernières tendances immobilières et des opportunités exclusives.
            </h1>
            <p className=" text-center pb-4">
              Inscrivez-vous à notre newsletter et restez au courant.
            </p>
          </div>
          <div className="my-4">
            <form onSubmit={sendEmail} className="justify-center flex">
              <input
                className="placeholder:pl-2 flex sm:mr-[-50px] h-10 sm:w-[50%]  sm:h-[47px] mx-auto rounded-md text-black"
                type="email"
                placeholder="Entez votre E-Mail"
              />
              <button type='submit' className="bg-[#477998]/70 mx-auto w-28 leading-none hover:bg-[#477998] rounded-md font-medium text-white">
                Inscrivez-vous
              </button>
            </form>
            <p className="text-sm mx-10 flex-col text-center pt-4">
              Nous prenons soin de la protection de vos données. Lisez notre{" "}
              <Link to="/terms" className="underline cursor-pointer text-blue-500">
                politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto pt-10 pb-3 sm:grid flex-row lg:grid-cols-3 w-screen gap-8 text-[#08090a] bg-[#f1f7ed]">
        <div className="lg:col-span-3 sm:mr-20  flex justify-around max-w-screen sm:ml-20 ml-[12px] mb-4 sm:mb-0 ">
          <div className="pr-4">
            <h6 className="font-medium text-[#5cce61]">Liens utiles</h6>
            <ul className='flex flex-col'>
              <Link to={"/about"} className="py-2 text-sm cursor-pointer font-semibold">
                À propos
              </Link>
              <Link to={"/services"} className="py-2 text-sm cursor-pointer font-semibold">
                Services
              </Link>
              <Link to={"/contact"} className="py-2 text-sm cursor-pointer font-semibold">
                Contact
              </Link>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-[#5cce61]">Légal</h6>
            <ul>
              <Link to={"/terms"} className="py-2 text-sm cursor-pointer font-semibold">
                Politique de confidentialité
              </Link>
            </ul>
          </div>
        </div>
        <div className="h-[2px] bg-gray-900/50 opacity-80 w-[100rem] ml-[-20rem]"></div>
        <p className='pt-4 text-[#08090a] text-sm flex justify-center text-center'>Tous droits réservés {new Date().getFullYear()} - © Global Immobilier</p>
      </div>
    </div>
  );
}

export default Footer;