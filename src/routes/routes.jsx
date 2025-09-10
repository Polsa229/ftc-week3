// routes.js
import { lazy, Suspense } from "react";
import DefaultLayout from "../components/DefaultLayout";
import LoadingSpinner from "../Pages/LoadingSpinner";

const Homepage = lazy(() => import("../Pages/Homepage"));
const ProductDetail = lazy(() => import("../Pages/ProductDetail"));
const ProductPage = lazy(() => import("../Pages/ProductPage"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Homepage />
        </Suspense>
      </DefaultLayout>
    ),
    exact: true,
  },
  {
    path: "/products",
    element: (
      <DefaultLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductPage />
        </Suspense>
      </DefaultLayout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <DefaultLayout detail={true} >
        <Suspense fallback={<LoadingSpinner />}>
          <ProductDetail />
        </Suspense>
      </DefaultLayout>
    ),
  },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage />,
  // },
  {
    path: "*",
    element: (
      <DefaultLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Homepage />
        </Suspense>
      </DefaultLayout>
    ),
  },
];
