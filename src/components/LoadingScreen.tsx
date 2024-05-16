import { CgSpinnerTwo } from "react-icons/cg";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 text-4xl text-white">
      <div className="animate-spin">
        <CgSpinnerTwo />
      </div>
    </div>
  );
};

export default LoadingScreen;
