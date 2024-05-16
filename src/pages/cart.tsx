import PageLayout from "../components/PageLayout";
import ProductCard from "../components/ProductCard";
import { cartProductsAtom, purchasedProductsAtom } from "../atoms";
import { useAtom } from "jotai";
import TProduct from "../types/TProduct";
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useAtom(cartProductsAtom);
  const [purchasedProducts, setPurchasedProducts] = useAtom(
    purchasedProductsAtom,
  );
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isRemoveProductModalOpened, setIsRemoveProductModalOpened] =
    useState(false);
  const [isPurchasedProductModalOpened, setIsPurchasedProductModalOpened] =
    useState(false);

  const handleRemoveProduct = (product: TProduct) => {
    if (!cartProducts) return;
    const newCartProducts = cartProducts.filter(
      (item) => item.id !== product.id,
    );
    setCartProducts(newCartProducts);
    setSelectedProduct(null);
    toast.success("Producto removido del carrito");
    setIsRemoveProductModalOpened(false);
  };

  const handlePurchasedProducts = (products: TProduct[]) => {
    const newPurchasedProducts = [...(purchasedProducts || []), ...products];
    setPurchasedProducts(newPurchasedProducts);
    setCartProducts([]);
    setIsPurchasedProductModalOpened(false);
    toast.success("Productos comprados");
  };

  if (
    cartProducts === null ||
    cartProducts === undefined ||
    cartProducts.length === 0
  )
    return (
      <PageLayout>
        <div className="flex min-h-[37.4rem] flex-col items-center justify-center">
          <h1 className="text-3xl">No tienes ningun producto agregado</h1>
        </div>
      </PageLayout>
    );

  return (
    <PageLayout>
      {isPurchasedProductModalOpened && (
        <Modal
          onClose={() => {
            setIsPurchasedProductModalOpened(false);
          }}
        >
          <div className="z-50 flex w-full max-w-xs flex-col gap-4 rounded-md bg-white p-4">
            <div>Quieres comprar estos productos?</div>
            <div className="flex w-full items-center justify-between">
              <Button
                variant="secondary"
                onClick={() => handlePurchasedProducts(cartProducts)}
              >
                <p className="text-white">Si</p>
              </Button>
              <Button
                variant="error"
                onClick={() => setIsPurchasedProductModalOpened(false)}
              >
                <p>No</p>
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {isRemoveProductModalOpened && (
        <Modal
          onClose={() => {
            setSelectedProduct(null);
            setIsRemoveProductModalOpened(false);
          }}
        >
          <div className="z-50 flex w-full max-w-xs flex-col gap-4 rounded-md bg-white p-4">
            <div>Quieres remover este producto de tu carrito?</div>
            <div className="flex w-full items-center justify-between">
              <Button
                variant="secondary"
                onClick={() => handleRemoveProduct(selectedProduct!)}
              >
                <p className="text-white">Si</p>
              </Button>
              <Button
                variant="error"
                onClick={() => setIsRemoveProductModalOpened(false)}
              >
                <p>No</p>
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex min-h-[37.4rem] flex-col">
        <div className="flex w-full flex-col gap-4 px-12 py-12">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Productos en tu Carrito:</h1>
            <Button
              onClick={() => setIsPurchasedProductModalOpened(true)}
              variant="secondary"
            >
              <span className="px-4 text-white">Comprar estos Productos</span>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-16">
            {cartProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                wasAdded
                onRemoveProduct={() => {
                  setIsRemoveProductModalOpened(true);
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

export default CartPage;
