import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get("category") ?? "all";

    const visibleProducts = activeCategory === "all"
        ? products
        : products.filter((product) => product.category === activeCategory);

    const buttonClass = (category: string): string => {
        if (category === activeCategory) {
            return "border-2 border-black py-2 px-4 bg-blue-500 text-white font-bold";
        }

        return "border-2 border-black py-2 px-4 hover:bg-gray-200";
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Catalog</h1>

            <div className="flex gap-2 mb-4">
                <button className={buttonClass("all")} onClick={() => setSearchParams({ category: "all" })}>All</button>
                <button className={buttonClass("phones")} onClick={() => setSearchParams({ category: "phones" })}>Phones</button>
                <button className={buttonClass("laptops")} onClick={() => setSearchParams({ category: "laptops" })}>Laptops</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visibleProducts.map((product) => (
                    <div key={product.id} className="border-2 border-black p-4">
                        <h3 className="text-xl font-bold">{product.title}</h3>
                        <p className="mb-2">Price: {product.price} $</p>
                        <Link to={`/products/${product.id}`} className="text-blue-600 underline">Details</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage;
