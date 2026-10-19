import { Link } from "react-router-dom";
import { products } from "../data/products";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Home page</h1>
            <p className="mb-2">Small shop with phones and laptops.</p>
            <p className="mb-4">Products in the catalog: {products.length}</p>
            <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to catalog
            </Link>
        </div>
    )
}

export default HomePage;
