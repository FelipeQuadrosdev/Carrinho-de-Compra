import { useContext } from "react"
import { ProductContext } from "../../context"
import { Link } from "react-router-dom"
import "./style.css"

export function Cart() {
    const { cart, handleAddItem, handleRemove, calculateTotal } = useContext(ProductContext)

    function handleFinalizarCompra() {
        alert("Compra Finalizada com Sucesso")
    }
    return (
        <article className="article">
            {cart.length === 0 && (
                <div className="carrinhovazio">
                    <h3>Carrinho está vazio!</h3>
                    <Link to="/" className="a">Acessar Produtos</Link>
                </div>
            )}
            <div></div>
            {cart.map((item) => (
                <div className="container" key={item.id}>
                    <img src={item.cover} alt={item.title} />

                    <h2>{item.title}</h2>
                    <div className=" divButton">
                        <button onClick={() => handleRemove(item)}>-</button>
                        {item.quantidade}
                        <button onClick={() => handleAddItem(item)}>+</button>
                    </div>
                    <p>{item.totalpreco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>

                </div>
            ))}

            {cart.length > 0 && (
                <div className="totalCompra">
                    <span >Total:{calculateTotal().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                    <button onClick={handleFinalizarCompra}>Finzalizar Compra</button>
                </div>
            )}

        </article>
    )
}