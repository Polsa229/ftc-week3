// @flow strict

import * as React from "react";
import { dogs } from "../data/categories";
import { useParams } from "react-router-dom";
import ProductImgShown from "../components/ProductImgShown";

function ProductDetail() {
  const { id } = useParams(); // récupère l'id dynamique depuis l'URL
  const [productItem, setProductItem] = React.useState(null);

  React.useEffect(() => {
    if (id) {
      const filtered = dogs.find(
        (item) => item.sku.toLowerCase() === id.toLowerCase()
      );

      if (filtered) {
        setProductItem(filtered);
        document.title = `${filtered.name} - Product Detail`;
      }
    }
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        {productItem.gallery && (
          <ProductImgShown images={productItem.gallery} />
        )}
        <h1 className="text-3xl font-bold">Product Detail Page</h1>
        <p className="mt-4 text-lg">
          {id ? `Product ID: ${id}` : "Loading..."}
        </p>
        {productItem && (
          <p className="mt-2 text-secondary-60">
            {productItem.name} - {productItem.gender}, {productItem.age}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
