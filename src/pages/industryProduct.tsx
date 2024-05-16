import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import LoadingScreen from "../components/LoadingScreen";
import useProductData from "../hooks/useProductData";
import ProductDetail from "../components/ProductDetail";
import { INDUSTRY_PRODUCTS } from "../mocks/industryProducts";

const IndustryProductPage = () => {
  const { productId } = useParams();
  const product = useProductData(productId!, INDUSTRY_PRODUCTS);

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

export default IndustryProductPage;
