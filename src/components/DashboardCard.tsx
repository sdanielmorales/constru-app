interface DashboardCardProps {
  card: {
    title: string;
    description: string;
    imageUrl: string;
    isDesign?: boolean;
  };
}

const DashboardCard = (props: DashboardCardProps) => {
  const { card } = props;
  const { title, description, imageUrl, isDesign } = card;
  return (
    <div
      className={`flex flex-col items-center gap-4 ${isDesign && "flex-col-reverse"}`}
    >
      <img src={imageUrl} className="w-[95%]" />
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-2xl font-medium">{title}</h2>
        <p className="max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
