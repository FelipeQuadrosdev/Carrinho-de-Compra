import { useContext } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"
import { ProductContext } from "../../context"
import "./style.css"
export function Header() {
    const{carttotal}=useContext(ProductContext)

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="linklogo">PetShotDev</Link>
                <Link to="/cart" className="link"> <FiShoppingCart size={22} color="#121212" />
                    <span className="span">{carttotal}</span>
                </Link>

            </nav>
        </header>
    )
}