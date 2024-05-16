import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import LoadingScreen from "../components/LoadingScreen";
import useProductData from "../hooks/useProductData";
import ProductDetail from "../components/ProductDetail";
import { DESIGN_PRODUCTS } from "../mocks/designProducts";

const DesignProductPage = () => {
  const { productId } = useParams();
  const product = useProductData(productId!, DESIGN_PRODUCTS);

  if (!product) {
    return <LoadingScreen />;
  }

  return (
    <PageLayout>
      <div className="flex h-[37.4rem] flex-col">
        <ProductDetail product={product} />
      </div>
    </PageLayout>
  );
};

export default DesignProductPage;
