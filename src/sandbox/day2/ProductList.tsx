import {useState} from 'react';

type Product = {
    id: number;
    title: string;
    done: boolean;
};


let nextId = 3;
const initialProducts: Product[] = [
    {id: 0, title: 'Buy milk', done: true},
    {id: 1, title: 'Eat tacos', done: false},
    {id: 2, title: 'Brew tea', done: false},
];


type AddProductProps = {
    onAddProduct: (title: string) => void;
};

function AddProduct({onAddProduct}: AddProductProps) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add Product"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddProduct(title);
            }}>Add
            </button>
        </>
    )
}


type ProductItemProps = {
    product: Product;
    onChange: (nextProduct: Product) => void;
    onDelete: (productId: Product['id']) => void;
};

function ProductItem({product, onChange, onDelete}: ProductItemProps) {
    return (
        <label>
            <input
                type="checkbox"
                checked={product.done}
                onChange={e => {
                    onChange({
                        ...product,
                        done: e.target.checked
                    });
                }}
            />
            {product.title}
            <button onClick={() => onDelete(product.id)}>
                Delete
            </button>
        </label>
    );
}


type ListProps = {
    products: Product[];
    onChangeProduct: (nextProduct: Product) => void;
    onDeleteProduct: (productId: Product['id']) => void;
};

function List({
                  products,
                  onChangeProduct,
                  onDeleteProduct
              }: ListProps) {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <ProductItem
                        product={product}
                        onChange={onChangeProduct}
                        onDelete={onDeleteProduct}
                    />
                </li>
            ))}
        </ul>
    );
}

export default function ProductList() {
    const [products, setProducts] = useState(
        initialProducts
    );

    function handleAddProduct(title: string) {
        setProducts([
            ...products,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangeProduct(nextProduct: Product) {
        setProducts(products.map(t => {
            if (t.id === nextProduct.id) {
                return nextProduct;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteProduct(productId: Product['id']) {
        setProducts(
            products.filter(t => t.id !== productId)
        );
    }

    return (
        <>
            <AddProduct
                onAddProduct={handleAddProduct}
            />
            <List
                products={products}
                onChangeProduct={handleChangeProduct}
                onDeleteProduct={handleDeleteProduct}
            />
        </>
    );
}