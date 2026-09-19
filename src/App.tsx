import ProductList from "./sandbox/day1/ProductList";
import { products } from "./sandbox/day1/products";

export default function App() {
    return (
        <div className="app">
            <ProductList products={products || []} />
        </div>
    );
}
