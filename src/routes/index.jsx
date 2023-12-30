import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home/index";
import Error404 from "../views/Error/error";
import PageProductDetail from "../views/Detail";
import PageProductCategory from "../views/Category";
import LayOutPublic from "../layout/LayOutPublic";
import Cart from "../views/Cart/cart";
import Checkout from "../views/Checkout/checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOutPublic />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:categoryId",
                element: <PageProductCategory />,
            },
            {
                path: "/product/:productId",
                element: <PageProductDetail />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
        ],
    },
]);

const Routes = () => <RouterProvider router={router} />

export default Routes