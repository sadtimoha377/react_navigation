import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./main_layout";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/product-detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductDetailPage />
            }
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
