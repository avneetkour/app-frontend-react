import { useState, useEffect } from "react";
import ResData from "../Utils/mockData";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("filteredList",filteredList);
  }

  const filterRes = () => {
    const newFilteredList = filteredList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredList(newFilteredList);
    console.log(filteredList);
  }
  console.log("filteredList2",filteredList);
  return (
    <>
      <div>
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
