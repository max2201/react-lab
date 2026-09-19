import {products} from "./products.ts";
import ProductCard from "./ProductCard";

export default function ProductList() {
    return products.length ? products.map((item) => {
        return <ProductCard key={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}
                            inStock={item.inStock}/>
    }) : <span>Товаров нет</span>
}