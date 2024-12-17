import { createContext, ReactNode, useState } from "react";

export interface ProductsProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    quantidade: number;
    totalpreco: number;
}

interface CartProps {
    cart: ProductsProps[];
    carttotal: number;
    handleAddItem: (product: ProductsProps) => void;
    handleRemove: (product: ProductsProps) => void;
    calculateTotal: () => number;
}

interface ProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext({} as CartProps);

export function ProviderContext({ children }: ProviderProps) {
    const [cart, setCart] = useState<ProductsProps[]>([]);

    function handleAddItem(product: ProductsProps) {
        const indexList = cart.findIndex(item => item.id === product.id);
        if (indexList !== -1) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantidade: item.quantidade + 1, totalpreco: (item.quantidade + 1) * item.price }
                    : item
            );
            setCart(updatedCart);
            return;
        }
        const newItem = {
            ...product,
            quantidade: 1,
            totalpreco: product.price
        };
        setCart([...cart, newItem]);

    }

    function handleRemove(product: ProductsProps) {
        const indexList = cart.findIndex(item => item.id === product.id);
        if (indexList !== -1) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantidade: item.quantidade - 1, totalpreco: (item.quantidade - 1) * item.price }
                    : item
            ).filter(item => item.quantidade > 0);

            setCart(updatedCart);
        }
    }
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.totalpreco, 0);
    }


    return (
        <ProductContext.Provider value={{
            cart,
            carttotal: cart.length,
            handleAddItem,
            handleRemove,
            calculateTotal
        }}>
            {children}
        </ProductContext.Provider>
    );
}
