import ResData from "../Utils/mockData";
import Restaurant from "./Restaurant";

const Body = () => {
  return (
    <div className="body">
      {ResData.map((restaurant) => (
        <Restaurant key={restaurant.info.id} {...restaurant.info} />
      ))}
    </div>
  );
};

export default Body;
