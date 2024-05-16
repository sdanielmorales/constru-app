import DashboardCard from "../components/DashboardCard";
import LoadingScreen from "../components/LoadingScreen";
import PageLayout from "../components/PageLayout";
import useImageLoader from "../hooks/useImageLoader";
import { CARD_DATA } from "../mocks/cardData";

const DashboardPage = () => {
  const imageUrl = "https://www.construex.com.ec/images/hero/banner-home.jpg";
  const loading = useImageLoader(imageUrl);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <PageLayout>
      <div className="flex flex-col">
        <img src={imageUrl} alt="" />
        <div className="mt-8 flex gap-4 px-8 pb-12">
          {CARD_DATA.map((card, index) => (
            <DashboardCard key={index} card={card} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
