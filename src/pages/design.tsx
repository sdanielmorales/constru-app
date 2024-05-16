import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ProductCard from "../components/ProductCard";
import { cartProductsAtom, usernameAtom } from "../atoms";
import { useAtom } from "jotai";
import TProduct from "../types/TProduct";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { DESIGN_PRODUCTS } from "../mocks/designProducts";

const DesignPage = () => {
  const [username] = useAtom(usernameAtom);
  const navigate = useNavigate();
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

  const handleOnViewDetails = (productId: string) => {
    navigate(`/${username}/design/${productId}`);
  };
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
      <div className="flex flex-col">
        <div className="flex w-full flex-col gap-4 px-12 py-12">
          <h1 className="text-3xl font-semibold">Productos de Diseño:</h1>
          <div className="flex flex-wrap items-center justify-center gap-16">
            {DESIGN_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => handleOnViewDetails(product.id)}
                onAddProduct={() => {
                  setIsAddToCartModalOpened(true);
                  setSelectedProduct(product);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DesignPage;
