import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/pages/homepage/HomePage';
import About from './components/pages/about/About';
import Services from './components/pages/services/Services';
import Contact from './components/pages/contact/Contact';
import Terms from "./components/terms/Terms";
import MainLayout from "./components/layouts/MainLayout";
import NotFoundPage from "./components/pages/not_found/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
