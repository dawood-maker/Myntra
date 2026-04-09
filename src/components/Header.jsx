import { Link } from "react-router-dom";
import myntralogo from "../assets/myntra.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap md:flex-nowrap items-center px-2 md:px-4 bg-white shadow-sm">
      {/* LOGO */}
      <div className="w-[20%] md:w-[10%] flex justify-center items-center">
        <Link to="/">
          <img
            className="h-[40px] md:h-[70px]"
            src={myntralogo}
            alt="Myntra Logo"
          />
        </Link>
      </div>

      {/* NAVIGATION */}
      <Navbar />

      {/* SEARCH */}
      <div className="w-full md:w-[25%] flex items-center relative mt-2 md:mt-0">
        <div className="absolute left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          className="w-full h-[35px] md:h-[40px] bg-[#f5f5f6] rounded pl-[40px] focus:outline-none"
          type="text"
          placeholder="Search for products, brands and more"
        />
      </div>

      {/* ICONS */}
      <div className="w-full md:w-[15%] flex justify-around md:justify-between items-center mt-2 md:mt-0 text-[11px] md:text-[14px]">
        {/* PROFILE */}
        <div className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="font-bold pl-[10px]">Profile</p>
        </div>

        {/* WISHLIST */}
        <div className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p className="font-bold">Wishlist</p>
        </div>

        {/* BAG */}
        <div className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
            />
          </svg>
          <p className="font-bold">Bag</p>
        </div>
      </div>
    </div>
  );
}

export default Header;