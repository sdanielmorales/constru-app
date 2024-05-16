import { useNavigate } from "react-router-dom";
import { usernameAtom } from "../atoms";
import { useAtom } from "jotai";

const Popover = () => {
  const [username] = useAtom(usernameAtom);

  const navigate = useNavigate();

  const popoverOptions = [
    {
      label: "Mi Carrito",
      path: `/${username}/cart`,
    },
    {
      label: "Mis compras",
      path: `/${username}/purchased`,
    },
    {
      label: "Inicio",
      path: `/${username}`,
    },
  ];

  return (
    <div className="absolute right-4 z-20 mt-[163px] flex w-[220px] flex-col rounded-lg bg-slate-700 lg:right-12 ">
      <div>
        {popoverOptions.map((option) => (
          <div
            key={option.label}
            onClick={() => navigate(option.path)}
            className="flex cursor-pointer flex-row items-center justify-center gap-2 py-1"
          >
            <p className="text-center text-lg text-white">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popover;
