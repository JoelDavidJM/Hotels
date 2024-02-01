import { Link } from "react-router-dom"
import './style/headerShared.css'

const HeaderShared = () => {
  return (
    <header className="headerShared__header">
        <h1 className="headerShared__header__h1"><Link to='/' className="headerShared__header__link__title">HotelApp</Link></h1>
        <nav className="headerShared__header__nav">
            <ul className="headerShared__header__ul"> 
                <li className="headerShared__header__li"><Link to='/reservation' className="headerShared__header__link">Reservtion</Link></li>
                <li className="headerShared__header__li"><Link to='/register' className="headerShared__header__link">Register</Link></li>
                <li className="headerShared__header__li"><Link to='/login' className="headerShared__header__link">Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared