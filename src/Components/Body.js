import { useState } from "react";
import ResData from "../Utils/mockData";
import Restaurant from "./Restaurant";

const Body = () => {
  const [filteredList, setFilteredList] = useState(ResData);
  const filterRes = () => {
    const filteredList = ResData.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredList(filteredList);
    console.log(filteredList);
  }
  return (
    <>
      <div>
        <button className="res-btn" onClick={filterRes}>Top Rated Restaurant</button>
      </div>
      <div className="body">
        {filteredList.map((restaurant) => (
          <Restaurant key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
