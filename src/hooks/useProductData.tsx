import { useState, useEffect } from "react";
import TProduct from "../types/TProduct";
import { toast } from "react-toastify";

const useProductData = (productId: string, productsData: TProduct[]) => {
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      toast.error(`Producto con ID ${productId} no encontrado.`);
    }
  }, [productId, productsData]);

  return product;
};

export default useProductData;
