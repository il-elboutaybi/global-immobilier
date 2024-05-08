import { Outlet } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import Footer from "../footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <NavBar />
      <Toaster position="bottom-right"/>
    </>
  );
};

export default MainLayout;