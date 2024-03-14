import { Link } from "react-router-dom"
import logo from '../src/assets/logo.svg'; // Ajusta la ruta al archivo SVG de tu logo


const Header = () => {
  return (
    <header className="bg-blue-200 text-white p-4 flex justify-between items-center font-bold font-sans">
      <div className="flex items-center">
        <Link to="..">
          <img src={logo} alt="Logo React" className="w-40 h-40  mx-2" />
        </Link>
          <span className="text-4xl font-bold mx-5 timmana-regular text-center pt-4 ">
            <span className="text-black">STREET</span>
            <span className="text-red-500">PULSE</span>
          </span>
      </div>
      {/* Enlaces a distintas partes de la web */}
      <nav>
        <ul className="flex space-x-12 mx-10">
          <li>
            {" "}
            <Link to="/acerca_de" className="hover:text-gray-400 geologica-font">
              Acerca de
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 geologica-font">Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
