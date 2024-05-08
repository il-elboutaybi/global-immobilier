import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-screen font-poppins">
      <FaExclamationTriangle className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4 text-6xl"/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Cette page n'existe pas.</p>
      <Link
        to="/"
        className="text-white bg-blue-600/80 hover:bg-[#3D925A] rounded-md px-3 py-2 mt-4"
        >Retournez
      </Link>
    </section>
  )
}

export default NotFoundPage