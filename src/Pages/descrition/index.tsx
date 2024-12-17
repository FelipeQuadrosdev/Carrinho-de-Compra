import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { ProductContext } from "../../context"
import { ProductsProps } from "../home"
import { FiShoppingCart } from "react-icons/fi"
import "./sytles.css"

export function Description() {
    const [detail, setDetail] = useState<ProductsProps>()
    const { handleAddItem } = useContext(ProductContext)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        async function ProductDetail() {
            const response = await api.get(`/products/${id}`)
            setDetail(response.data)
        }
        ProductDetail()
    }, [id])

    function details(detail: ProductsProps) {
        handleAddItem({ ...detail, quantidade: 1, totalpreco: detail.price })
        navigate("/cart")
    }

    return (
        <div>
            {detail && (
                <main className="mainContainer">
                    <img src={detail?.cover} />

                    <div className="mainDescription">
                        <h2>{detail?.title}</h2>
                        <span>{detail?.description}</span>

                        <div className="mainButton">
                            <p>Preço:{detail?.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}</p>
                            <button onClick={() => details(detail)}>
                                <FiShoppingCart size={20} color="#000" />
                            </button>
                        </div>

                    </div>
                </main>
            )}
        </div>
    )
}