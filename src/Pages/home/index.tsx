import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../../context";
import { api } from "../../services/api";
import { FiShoppingCart } from "react-icons/fi"
import "./style.css"
import { Link } from "react-router-dom";

export interface ProductsProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    quantidade?: number;
    totalpreco?: number;

}

export function Home() {
    const [products, setProducts] = useState<ProductsProps[]>([])
    const { handleAddItem } = useContext(ProductContext)

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products")

            setProducts(response.data)
        }

        getProducts();
    }, [])

    function handleaddProduct(product: ProductsProps) {
        handleAddItem({ ...product, quantidade: 1, totalpreco: product.price })
    }

    return (
        <main className="Maincontainer">

            {products.map((product) => (
                <section key={product.id} className="section">

                    <div className="subcontainer">
                    <Link to={`/productDetail/${product.id}`}>
                            <h2>{product.title}</h2>
                            <img src={product.cover} alt={product.title} />
                        </Link>
                        <div className="divbutton">
                            <p>{product.price.toLocaleString("Pt-BR", { style: "currency", currency: "BRL" })}</p>
                            <button onClick={() => handleaddProduct(product)}>
                                <FiShoppingCart size={20} color="#fff" />
                            </button>
                        </div>
                    </div>

                </section>
            ))}
        </main>
    )
}