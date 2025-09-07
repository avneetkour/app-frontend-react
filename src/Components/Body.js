import { useState, useEffect } from "react";
// import ResData from "../Utils/mockData";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const searchRestVaue = () =>{
    const newFilteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(newFilteredList);
    if(newFilteredList.length === 0){
      alert("No restaurant found");
    }
  }
  const filterRes = () => {
    const newFilteredList = resList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredList(newFilteredList);
    setSearchValue("");
    console.log(filteredList);
  }
  console.log("filteredList2",filteredList);
  return (
    <>
      <div className="btn-container">
        <div className="search-restaurant">
          <input type="text" className="search-input" placeholder="Search Restaurant" value={searchValue} onChange={(event)=>{
            setSearchValue(event.target.value);
          }}/>
          <button className="search-btn" onClick={searchRestVaue} disabled = {searchValue==""}>Search</button>
        </div>
        <button className="res-btn" onClick={filterRes}>
          Top Rated Restaurant
        </button>
      </div>
      {filteredList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          {filteredList.map((restaurant) => (
            <Restaurant key={restaurant.info.id} {...restaurant.info} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
