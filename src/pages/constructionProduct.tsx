import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import LoadingScreen from "../components/LoadingScreen";
import useProductData from "../hooks/useProductData";
import ProductDetail from "../components/ProductDetail";
import { cartProductsAtom } from "../atoms";
import { useAtom } from "jotai";
import { useState } from "react";
import TProduct from "../types/TProduct";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { CONSTRUCTION_PRODUCTS } from "../mocks/constructionProducts";

const ConstructionProductPage = () => {
  const { productId } = useParams();
  const product = useProductData(productId!, CONSTRUCTION_PRODUCTS);
  const [cartProducts, setCartProducts] = useAtom(cartProductsAtom);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isAddToCartModalOpened, setIsAddToCartModalOpened] = useState(false);

  const handleAddProduct = (product: TProduct) => {
    const newCartProducts = [...(cartProducts || []), product];
    setCartProducts(newCartProducts);
    setSelectedProduct(null);
    toast.success("Producto agregado al carrito");
    setIsAddToCartModalOpened(false);
  };

  if (!product) {
    return <LoadingScreen />;
  }

  return (
    <PageLayout>
      {isAddToCartModalOpened && (
        <Modal
          onClose={() => {
            setSelectedProduct(null);
            setIsAddToCartModalOpened(false);
          }}
        >
          <div className="z-50 flex w-full max-w-xs flex-col gap-4 rounded-md bg-white p-4">
            <div>Quieres agregar este producto a tu carrito?</div>
            <div className="flex w-full items-center justify-between">
              <Button
                variant="secondary"
                onClick={() => handleAddProduct(selectedProduct!)}
              >
                <p className="text-white">Si</p>
              </Button>
              <Button
                variant="error"
                onClick={() => setIsAddToCartModalOpened(false)}
              >
                <p>No</p>
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex h-[37.4rem] flex-col">
        <ProductDetail
          product={product}
          onAddProduct={() => {
            setSelectedProduct(product);
            setIsAddToCartModalOpened(true);
          }}
        />
      </div>
    </PageLayout>
  );
};

export default ConstructionProductPage;
