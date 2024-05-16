import PageLayout from "../components/PageLayout";
import ProductCard from "../components/ProductCard";
import { purchasedProductsAtom, returnedProductsAtom } from "../atoms";
import { useAtom } from "jotai";
import TProduct from "../types/TProduct";
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { toast } from "react-toastify";

const PurchasedProducts = () => {
  const [purchasedProducts, setPurchasedProducts] = useAtom(
    purchasedProductsAtom
  );
  const [returnedProducts, setReturnedProducts] = useAtom(returnedProductsAtom);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isRemoveProductModalOpened, setIsRemoveProductModalOpened] =
    useState(false);

  const handleRemoveProduct = (product: TProduct) => {
    if (!purchasedProducts) return;
    const newPurchasedProducts = purchasedProducts.filter(
      (item) => item.id !== product.id
    );
    const newReturnedProducts = [...(returnedProducts || []), product];
    setReturnedProducts(newReturnedProducts);
    setPurchasedProducts(newPurchasedProducts);
    setIsRemoveProductModalOpened(false);
    toast.success("Producto devuelto correctamente!");
  };

  if (
    purchasedProducts === null ||
    purchasedProducts === undefined ||
    purchasedProducts.length === 0
  )
    return (
      <PageLayout>
        <div className="flex min-h-[37.4rem] flex-col items-center justify-center">
          <h1 className="text-3xl">No tienes ningun producto comprado</h1>
        </div>
      </PageLayout>
    );

  return (
    <PageLayout>
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
            <h1 className="text-3xl font-semibold">
              Productos comprados anteriormente:
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-16">
            {purchasedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                wasAdded
                wasPurchased
                onRemoveProduct={() => {
                  setIsRemoveProductModalOpened(true);
                  setSelectedProduct(product);
                }}
                onRefundProduct={() => {
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

export default PurchasedProducts;
