import { Outlet } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import Footer from "../footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster position="top-left"/>
    </>
  );
};

export default MainLayout;