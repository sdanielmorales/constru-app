import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import TProduct from "../types/TProduct";
import { CONSTRUCTION_PRODUCTS } from "../mocks/constructionProducts";
import { DESIGN_PRODUCTS } from "../mocks/designProducts";
import { INDUSTRY_PRODUCTS } from "../mocks/industryProducts";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { cartProductsAtom, usernameAtom } from "../atoms";
import { toast } from "react-toastify";
import Modal from "./Modal";
import Button from "./Button";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  const [username] = useAtom(usernameAtom);
  const [cartProducts, setCartProducts] = useAtom(cartProductsAtom);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isAddToCartModalOpened, setIsAddToCartModalOpened] = useState(false);

  const handleOnSearch = (text: string) => {
    setSearchText(text);
  };
  const handleAddProduct = (product: TProduct) => {
    const newCartProducts = [...(cartProducts || []), product];
    setCartProducts(newCartProducts);
    setSelectedProduct(null);
    toast.success("Producto agregado al carrito");
    setIsAddToCartModalOpened(false);
  };

  const filterProducts = useCallback(
    (products: TProduct[]) => {
      return products.filter((product: TProduct) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    },
    [searchText],
  );

  const allProducts =
    CONSTRUCTION_PRODUCTS.concat(DESIGN_PRODUCTS).concat(INDUSTRY_PRODUCTS);
  const filteredProductsRef = useRef<TProduct[]>(allProducts);

  useEffect(() => {
    filteredProductsRef.current = filterProducts(allProducts);
  }, [allProducts, filterProducts, searchText]);

  const filteredProducts = filteredProductsRef.current;

  const handleOnViewDetails = (productId: string) => {
    navigate(`/${username}/design/${productId}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
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
      <div className="relative flex h-full w-full flex-col justify-between">
        <div className="z-20 flex w-full">
          <TopBar onSearch={handleOnSearch} />
        </div>
        <div className="h-full overflow-y-auto">
          {searchText !== "" ? (
            <div className="flex min-h-[37.4rem] flex-wrap items-center justify-center gap-16">
              {filteredProducts.map((product: TProduct) => (
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
          ) : (
            children
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
