const Location = () => {
  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <div className="h-[40rem] sm:mt-20 mt-[20%] mb-20">
        <h1 className="flex justify-center font-extrabold text-center sm:text-4xl text-2xl">
          Où nous trouver
        </h1>
        <div className="flex justify-center mt-20" id="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26093.965477001413!2d-2.9196315499999996!3d35.16296274999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a74dd585232f%3A0x66d8001272e92c16!2sGlobal%20Call!5e0!3m2!1sen!2sma!4v1714223376062!5m2!1sen!2sma"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-screen sm:mx-36 mx-10 h-[30rem]"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Location;
