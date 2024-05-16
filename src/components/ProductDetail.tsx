import TProduct from "../types/TProduct";
import Button from "./Button";

type ProductDetailProps = {
  product: TProduct;
  onAddProduct?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ProductDetail = (props: ProductDetailProps) => {
  const { product, onAddProduct } = props;
  return (
    <div className="flex w-full flex-col gap-4 px-12 py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <Button onClick={onAddProduct} variant="secondary">
          <span className="px-4 text-white">Comprar este Producto</span>
        </Button>
      </div>
      <div className="flex gap-12">
        <img src={product.imageUrl} className="w-80" alt="" />
        <div className="flex flex-col items-center gap-4">
          <span>{product.price}</span>
          <span>{product.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
