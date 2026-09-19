export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
    inStock: boolean;
};

export const products: Product[] = [
    {
        id: 1,
        title: "Механическая клавиатура Keychron K2 Pro, RGB, Hot-swap",
        price: 12990,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
        rating: 4.6,
        inStock: true,
    },
    {
        id: 2,
        title: "Беспроводные наушники Sony WH-1000XM5",
        price: 34990,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
        rating: 4.9,
        inStock: false,
    },
    {
        id: 3,
        title: "Смарт-часы Apple Watch Series 9, 45 мм",
        price: 41990,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
        rating: 4.7,
        inStock: true,
    },
    {
        id: 4,
        title: "Игровая мышь Logitech G Pro X Superlight 2",
        price: 11490,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
        rating: 4.3,
        inStock: true,
    },
    {
        id: 5,
        title: "Портативная колонка JBL Flip 6, водозащита IP67",
        price: 9990,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
        rating: 3.8,
        inStock: false,
    },
];
