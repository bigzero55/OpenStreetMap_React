import {Link} from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Puntos marcados</Link>
                </li>
                <li>
                    <Link to={"/Trazado"}>Trasado de rutas</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Header