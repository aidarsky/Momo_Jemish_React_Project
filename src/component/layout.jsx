import { NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const activeMenu = ({ isActive }) => isActive ? 'activeMenu' : ''
const Layout = () => {
    return (
        <div className="app-wrapper">
            <Header />

            <nav className="nav">
                <ul>
                    <li> <NavLink to={'/'} className={activeMenu}>Главная страница</NavLink> </li>
                    <li> <NavLink to={'/about'} className={activeMenu}>Яблоко</NavLink> </li>
                    <li> <NavLink to={'/posts'} className={activeMenu}>Смородина</NavLink> </li>
                    <li> <NavLink to={'/malina'} className={activeMenu}>Малина</NavLink> </li>
                    <li> <NavLink to={'/abrikos'} className={activeMenu}>Абрикос</NavLink> </li>
                    <li> <NavLink to={'/project'} className={activeMenu}>Проекты Момо-Жемиш</NavLink> </li>
                    <li> <NavLink to={'/shop'} className={activeMenu}>Наш Магазин</NavLink> </li>
                </ul>
            </nav>

            <Outlet />
            <Footer />
        </div>


    )
}
export default Layout
