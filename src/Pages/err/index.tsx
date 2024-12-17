import { Link } from "react-router-dom";
import "./style.css"

export function Error() {
    return (
        <div className="ErrorContainer">
            <h1>Error 404!</h1>
            <p>Pagina Não encontrada<Link to="/">Tela Home</Link></p>
        </div>
    )
}