import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div>
                <h1 className="text-3xl font-bold mb-4">Product not found</h1>
                <p className="mb-4">There is no product with id {id} in the catalog.</p>
                <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back
                </button>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            <div className="border-2 border-black p-4 mb-4">
                <p>Id: {product.id}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price} $</p>
                <p>Description: {product.description}</p>
            </div>

            <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back
            </button>
        </div>
    )
}

export default ProductDetailPage;
