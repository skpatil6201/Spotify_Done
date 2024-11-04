import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLocationSearching } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
function SideHeader() {

    const [homeOpen, setHomeOpen] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
  

    const homeHandeler = () => {
        setSearchOpen(false);
        setHomeOpen(true);
      };
      const searchHandeler = () => {
        setSearchOpen(true);
        setHomeOpen(false);
      };




  return (
    <div className="rounded-md bg-[#0a0e16] m-1 p-4">
    <div className="pl-3">
      <Link to={"/"}>
        <div
          className={`mb-5 flex gap-4 items-center hover:text-white ${
            !homeOpen && "text-gray-400"
          }`}
          onClick={homeHandeler}
        >
          {homeOpen ? (
            <GoHomeFill className="text-[30px]" />
          ) : (
            <GoHome className="text-[30px]" />
          )}
          <span className="text-md font-bold">Home</span>
        </div>{" "}
      </Link>

      <Link to={"/search"}>
        <div
          className={`flex gap-4 items-center hover:text-white ${
            !searchOpen && "text-gray-400"
          }`}
          onClick={searchHandeler}
        >
          {!searchOpen ? (
            <IoSearchOutline className="text-[30px]" />
          ) : (
            <MdOutlineLocationSearching className="text-[30px]" />
          )}
          <span className="text-md font-bold">Search</span>
        </div>{" "}
      </Link>
    </div>
  </div>


  )
}

export default SideHeader