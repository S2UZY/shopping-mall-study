import GlobalLayout from "./pages/_layout"
import Index from "./pages/index"
import CartIndex from "./pages/cart/index"
import PaymentIndex from "./pages/payment/index"
import ProductsIndex from "./pages/products/index"
import ProductsId from "./pages/products/[id]"
import AdminIndex from "./pages/admin/index"

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/cart", element: <CartIndex /> },
      { path: "/payment", element: <PaymentIndex /> },
      { path: "/products", element: <ProductsIndex /> },
      { path: "/products/:id", element: <ProductsId /> },
      { path: "/admin", element: <AdminIndex /> },
    ],
  },
]
