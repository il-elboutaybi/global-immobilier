import React, { useEffect } from 'react';
import NavBar from "../../navigation/NavBar";
import HeroSection from "../../hero/HeroSection";
import Features from "../../features/Features";
import Cards from "../../cards/Cards";
import CallToAction from "../../call_to_action/CallToAction";
import Review from "../../review/Review";

const HomePage = () => {

  useEffect(() => {
    // Function to load the Kommunicate chat script
    const loadKommunicateScript = () => {
      var kommunicateSettings = {
        "appId": "260d502f56fbc25a6f7c391926bdb079b",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = window.kommunicate || {};
      window.kommunicate._globals = kommunicateSettings;
    };

    // Load the Kommunicate script when the component mounts
    loadKommunicateScript();

    // Clean up function
    return () => {
      // You can perform cleanup tasks here if needed
    };
  }, []);

  return (
    <>

      <HeroSection />
      <Features />
      <Cards />
      <CallToAction />
      <Review />
      {/* Chat component starts */}
      <div id="kommunicate-chat-widget-mount-point"></div>
      {/* Chat component ends */}

    </>
  )
}

export default HomePage;
