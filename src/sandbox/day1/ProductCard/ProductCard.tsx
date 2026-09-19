import "./ProductCard.css";
import type { Product } from "../products";
import Badge from "../Badge";

type ProductCardProps = {
    product: Product;
};

const priceFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
});

export default function ProductCard({ product }: ProductCardProps) {
    const { title, price, image, rating, inStock } = product;
    const filledWidth = `${(Math.min(Math.max(rating, 0), 5) / 5) * 100}%`;

    return (
        <article
            className={`product-card${inStock ? "" : " product-card--out-of-stock"}`}
        >
            <div className="product-card__media">
                <img
                    className="product-card__image"
                    src={image}
                    alt={title}
                    loading="lazy"
                />
                {!inStock && (
                    <div className="product-card__badge">
                        <Badge>Нет в наличии</Badge>
                    </div>
                )}
            </div>

            <div className="product-card__body">
                <h3 className="product-card__title">{title}</h3>

                <div className="product-card__rating">
                    <span className="product-card__stars" aria-hidden="true">
                        ★★★★★
                        <span
                            className="product-card__stars-fill"
                            style={{ width: filledWidth }}
                        >
                            ★★★★★
                        </span>
                    </span>
                    <span>{rating.toFixed(1)}</span>
                </div>

                <div className="product-card__footer">
                    <span className="product-card__price">
                        {priceFormatter.format(price)}
                    </span>
                </div>
            </div>
        </article>
    );
}
