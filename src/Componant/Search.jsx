import React from "react";
import SideBar from "./SideBar";
import PlayBar from "./PlayBar";
import SearchHeader from "./SearchHeader";
import { getMetaData } from "../Utils/getMetaData";

const Search = () => {
  getMetaData()
  return (
    <>
      <SideBar />
      <PlayBar />
      <div className="w-3/4 fixed top-2 right-2 h-[85vh] rounded-lg shadow-lg bg-gray-800">
        <SearchHeader />
        
      </div>
    </>
  );
};

export default Search;
