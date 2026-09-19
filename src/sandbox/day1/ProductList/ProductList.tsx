import { type Product } from "../products";
import ProductCard from "../ProductCard";
import "./ProductList.css";

type ProductListProps = { products: Product[] };

export default function ProductList({ products }: ProductListProps) {
    if (!products?.length) return <p>Товаров нет</p>;

    return (
        <ul className="product-list">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    );
}
