import { useEffect, useState } from "react";

const useImageLoader = (imageUrl: string ) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setLoading(false);
    };
    image.onerror = () => {
      setLoading(false);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imageUrl]);

  return loading;
};

export default useImageLoader;
