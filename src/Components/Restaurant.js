import { IMG_CDN_URL } from "../Utils/constants";

const Restaurant = (props) => {
    // console.log("props", props);
    const { name, cuisines, avgRating, locality, areaName, costForTwo, cloudinaryImageId } = props;
    return (
        <div className="res-container">
            <div className="res-details">
                <img height="150px" width="250px" src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
                <h3>{name}</h3>
                <p>{cuisines.join(",")}</p>
                <p>Rating:{avgRating}</p>
                <p>Address {locality} , {areaName}</p>
                <p>Cost for two : {costForTwo}</p>
            </div>
        </div>
    )
}

export default Restaurant;