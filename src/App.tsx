import { useAtom } from "jotai";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { usernameAtom } from "./atoms";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const App = () => {
  const params = useParams();
  const [, setUsername] = useAtom(usernameAtom);

  useEffect(() => {
    const username = params.username;
    setUsername(username);
  }, [params.username, setUsername]);

  return (
    <>
      <Outlet />
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default App;
