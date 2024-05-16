import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import TextField from "./TextField";
import { usernameAtom } from "../atoms";
import { useAtom } from "jotai";
import Popover from "./Popover";

type TopBarProps = {
  onSearch?: (text: string) => void; 
};
const TopBar = ({ onSearch }: TopBarProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();
  const [username] = useAtom(usernameAtom);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchText = e.target.value;
    if (onSearch) {
      onSearch(searchText); 
    }
  };


  return (
    <div className="flex w-full flex-row items-center justify-between px-4 pb-4 lg:px-12">
      <img
        src={
          "https://www.cemexventures.com/wp-content/uploads/2023/12/Logo-Construex-1024x512.jpg"
        }
        alt="Actually Want Logo"
        className="w-40 cursor-pointer lg:w-56"
        onClick={() => navigate(`/${username}`)}
      />
      <div className="hidden items-center gap-8 pt-8 md:block">
        <div className="flex flex-col gap-4">
          <div className="min-w-[40rem]">
            <TextField
              isSearch
              placeholder="Escribe el nombre del producto que buscas"
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <p
                className={`cursor-pointer text-lg text-gray-600 ${location.pathname.includes("/construction") && "font-semibold underline"}`}
                onClick={() => navigate(`/${username}/construction`)}
              >
                Construcción
              </p>
            </div>
            <div className="text-center">
              <p
                className={`cursor-pointer text-lg text-gray-600 ${location.pathname.includes("/design") && "font-semibold underline"}`}
                onClick={() => navigate(`/${username}/design`)}
              >
                Diseño
              </p>
            </div>
            <div className="text-center">
              <p
                className={`cursor-pointer text-lg text-gray-600 ${location.pathname.includes("/industry") && "font-semibold underline"}`}
                onClick={() => navigate(`/${username}/industry`)}
              >
                Industria
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        className="flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-gray-800 px-4 py-4 md:gap-8 md:px-8 "
      >
        <img
          src={
            "https://www.construex.com.ec/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontruex-logo-grey.afc60847.png&w=256&q=75"
          }
          alt=""
          className="w-24"
        />

        <div className="text-3xl text-white">
          <IoMenu />
        </div>
      </div>
      {isPopoverOpen && (
        <>
          <div
            className="fixed inset-0 top-0 z-10"
            onClick={() => setIsPopoverOpen(false)}
          ></div>

          <Popover />
        </>
      )}
    </div>
  );
};

export default TopBar;
