import { returnedProductsAtom } from "../atoms";
import PageLayout from "../components/PageLayout";
import ProductCard from "../components/ProductCard";
import { useAtom } from "jotai";

const ReturnedProducts = () => {
  const [returnedProducts] = useAtom(returnedProductsAtom);

  if (
    returnedProducts === null ||
    returnedProducts === undefined ||
    returnedProducts.length === 0
  )
    return (
      <PageLayout>
        <div className="flex min-h-[37.4rem] flex-col items-center justify-center">
          <h1 className="text-3xl">No tienes ningun producto devuelto</h1>
        </div>
      </PageLayout>
    );

  return (
    <PageLayout>
      <div className="flex min-h-[37.4rem] flex-col">
        <div className="flex w-full flex-col gap-4 px-12 py-12">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">
              Productos devueltos anteriormente:
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-16">
            {returnedProducts.map((product) => (
              <ProductCard key={product.id} product={product} wasReturned />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReturnedProducts;
