import TProduct from "../types/TProduct";
import { IoIosAddCircle } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";
import Button from "./Button";

type ProductCardProps = {
  product: TProduct;
  onViewDetails?: () => void;
  onAddProduct?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRemoveProduct?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onRefundProduct?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  wasAdded?: boolean;
  wasPurchased?: boolean;
  wasReturned?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const ProductCard = ({
  product,
  onAddProduct,
  onViewDetails,
  onRemoveProduct,
  wasAdded,
  wasPurchased,
  onRefundProduct,
  wasReturned,
}: ProductCardProps) => {
  return (
    <div className="flex max-h-[30rem] w-[20rem] flex-col justify-between gap-2 rounded-[56px] px-8 py-4">
      <div className="flex flex-col">
        {wasAdded && !wasPurchased && (
          <div className="flex justify-end">
            <button onClick={onRemoveProduct}>
              <IoRemoveCircle className="text-4xl" />
            </button>
          </div>
        )}
        <div className="flex justify-center">
          <img src={product.imageUrl} className="h-36 w-36 rounded-xl" />
        </div>
        <h2 className="text-center text-xl">{product.title}</h2>
        <div className="max-h-[10rem] overflow-y-auto text-center">
          <span className="text-sm">{product.description}</span>
        </div>
        <span className="text-center">{product.price}</span>
      </div>
      <div className="flex w-full items-center justify-between gap-4 pl-12">
        {!wasAdded && !wasReturned && (
          <>
            <button onClick={onViewDetails}>
              <span className="underline">Ver Detalles</span>
            </button>

            <button onClick={onAddProduct}>
              <IoIosAddCircle className="text-4xl" />
            </button>
          </>
        )}
        {wasPurchased && (
          <Button variant="secondary" onClick={onRefundProduct}>
            <span className="px-4 text-white">Devolver este producto</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
