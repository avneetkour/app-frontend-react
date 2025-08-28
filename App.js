import ReactDOM from "react-dom/client";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
  
const Restaurant = (props) => {
    console.log("props", props);
    const { name, cuisines, avgRating, locality, areaName, costForTwo,cloudinaryImageId } = props;
    return (
        <div className="res-container">
            <div className="res-details">
                <img height="150px" width="250px" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
                <h3>{name}</h3>
                <p>{cuisines.join(",")}</p>
                <p>Rating:{avgRating}</p>
                <p>Address {locality} , {areaName}</p>
                <p>Cost for two : {costForTwo}</p>
            </div>
        </div>
    )
}

const ResData = [
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "150597",
                            "name": "Scoops Fast Food And Ice Cream",
                            "cloudinaryImageId": "fm3rs3g6z7ibfhesmxnu",
                            "locality": "Irrigation Colony",
                            "areaName": "Khajri Road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Bakery",
                                "Ice Cream",
                                "Snacks",
                                "Beverages"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "parentId": "179482",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "392",
                            "sla": {
                                "deliveryTime": 53,
                                "lastMileTravel": 13.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-55 mins",
                                "lastMileTravelString": "13.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 10 am, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-rest150597",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1072532",
                            "name": "Patalkot Sattu Food Express",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/31/3bfde030-bfd0-47af-a423-ed1e8bac6959_1072532.jpg",
                            "locality": "BATHMUTHA COMPLEX",
                            "areaName": "Chhindwara City",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Fast Food",
                                "Burgers",
                                "Cafe"
                            ],
                            "veg": true,
                            "parentId": "156072",
                            "avgRatingString": "NEW",
                            "sla": {
                                "deliveryTime": 1167,
                                "lastMileTravel": 13,
                                "serviceability": "SERVICEABLE",
                                "slaString": "1165-1170 mins",
                                "lastMileTravelString": "13.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 10:15 am, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹200 OFF",
                                "subHeader": "ABOVE ₹549",
                                "discountTag": "FLAT DEAL"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/patalkot-sattu-food-express-bathmutha-complex-chhindwara-city-rest1072532",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "522144",
                            "name": "Blue Chilli Restaurant",
                            "cloudinaryImageId": "je6qlse8csxgcfpuoybe",
                            "locality": "Ambedkar Nagar",
                            "areaName": "Prasia Road",
                            "costForTwo": "₹150 for two",
                            "cuisines": [
                                "South Indian",
                                "Indian",
                                "Fast Food"
                            ],
                            "avgRating": 3.8,
                            "veg": true,
                            "parentId": "311804",
                            "avgRatingString": "3.8",
                            "totalRatingsString": "228",
                            "sla": {
                                "deliveryTime": 1218,
                                "lastMileTravel": 13,
                                "serviceability": "SERVICEABLE",
                                "slaString": "1215-1220 mins",
                                "lastMileTravelString": "13.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 11 am, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "20% OFF",
                                "subHeader": "UPTO ₹120"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/blue-chilli-restaurant-ambedkar-nagar-prasia-road-rest522144",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "636458",
                            "name": "Creamy Affairs",
                            "cloudinaryImageId": "uwp7um5patbxkip8gnxg",
                            "locality": "Nagpur Road",
                            "areaName": "Polo Groud",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Bakery",
                                "Ice Cream",
                                "Beverages"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "parentId": "384397",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "42",
                            "sla": {
                                "deliveryTime": 49,
                                "lastMileTravel": 10.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "10.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 11 am, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/creamy-affairs-nagpur-road-polo-groud-rest636458",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "974258",
                            "name": "Hotel Faiz",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/17/fa998e2e-8232-49b2-8519-f25f81cdce09_974258.JPG",
                            "locality": "Chhindwara City",
                            "areaName": "Chhindwara City",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Biryani"
                            ],
                            "parentId": "98911",
                            "avgRatingString": "--",
                            "sla": {
                                "deliveryTime": 46,
                                "lastMileTravel": 10.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "10.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 11 am, tomorrow"
                            },
                            "badges": {},
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/hotel-faiz-chhindwara-city-rest974258",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "496348",
                            "name": "Pizza Box",
                            "cloudinaryImageId": "n7wbtvlifwbw5y4a7rrv",
                            "locality": "Sanchar Colony",
                            "areaName": "Chhindwara Locality",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Pizzas",
                                "Burgers",
                                "Beverages"
                            ],
                            "avgRating": 4.3,
                            "veg": true,
                            "parentId": "3045",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "211",
                            "sla": {
                                "deliveryTime": 55,
                                "lastMileTravel": 14.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "55-60 mins",
                                "lastMileTravelString": "14.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 12 noon, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/pizza-box-sanchar-colony-chhindwara-locality-rest496348",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "497756",
                            "name": "Tadka Restaurat",
                            "cloudinaryImageId": "fpql2gkgby76e1zkppgc",
                            "locality": "Nagpur Road",
                            "areaName": "Chhindwara Locality",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Indian",
                                "Chinese"
                            ],
                            "veg": true,
                            "parentId": "454856",
                            "avgRatingString": "--",
                            "sla": {
                                "deliveryTime": 49,
                                "lastMileTravel": 11.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "11.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 12:30 pm, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "174"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/tadka-restaurat-nagpur-road-chhindwara-locality-rest497756",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "612959",
                            "name": "AL Beak Food Corner",
                            "cloudinaryImageId": "cdmrudzbvvatdgfoo7iy",
                            "areaName": "Mohan Nagar",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "North Indian",
                                "Biryani",
                                "Tandoor"
                            ],
                            "avgRating": 5,
                            "parentId": "365742",
                            "avgRatingString": "5.0",
                            "totalRatingsString": "4",
                            "sla": {
                                "deliveryTime": 50,
                                "lastMileTravel": 12.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "12.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 2 pm, tomorrow"
                            },
                            "badges": {},
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/al-beak-food-corner-mohan-nagar-rest612959",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "151648",
                            "name": "Mr. Gurung Momo & Chinese Corner",
                            "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
                            "locality": "Teacher's Colony",
                            "areaName": "Mohan Nagar",
                            "costForTwo": "₹150 for two",
                            "cuisines": [
                                "Momos",
                                "Chinese",
                                "Fast Food"
                            ],
                            "avgRating": 4.2,
                            "veg": true,
                            "parentId": "140255",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "1.1K+",
                            "sla": {
                                "deliveryTime": 48,
                                "lastMileTravel": 13.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "13.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 5 pm, tomorrow"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹129"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "151509",
                            "name": "Dawat Restaurant (hotel Surya)",
                            "cloudinaryImageId": "pegljnajfpylaxlni05s",
                            "locality": "Sinchai Colony",
                            "areaName": "Chhindwara Locality",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Chinese",
                                "South Indian"
                            ],
                            "avgRating": 4.8,
                            "veg": true,
                            "parentId": "68916",
                            "avgRatingString": "4.8",
                            "totalRatingsString": "29",
                            "sla": {
                                "deliveryTime": 52,
                                "lastMileTravel": 13.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-55 mins",
                                "lastMileTravelString": "13.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 8:15 am, SATURDAY"
                            },
                            "badges": {},
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/dawat-restaurant-hotel-surya-sinchai-colony-chhindwara-locality-rest151509",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "630193",
                            "name": "Champaran Handi Restaurant",
                            "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
                            "locality": "Sinchai Colony",
                            "areaName": "Nagpur road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "North Indian"
                            ],
                            "avgRating": 4.2,
                            "parentId": "376324",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "431",
                            "sla": {
                                "deliveryTime": 4226,
                                "lastMileTravel": 11.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "4225-4230 mins",
                                "lastMileTravelString": "11.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Opens next at 1:20 pm, SUNDAY"
                            },
                            "badges": {},
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/champaran-handi-restaurant-sinchai-colony-nagpur-road-rest630193",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "487096",
                            "name": "Dino's Pizza",
                            "cloudinaryImageId": "seqnlipynpingek2iirl",
                            "locality": "Teacher's Colony",
                            "areaName": "Parasia Road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Pizzas",
                                "Burgers",
                                "Beverages"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "parentId": "387459",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "276",
                            "sla": {
                                "deliveryTime": 55,
                                "lastMileTravel": 14.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "55-60 mins",
                                "lastMileTravelString": "14.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Temporarily closed for delivery"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "₹150 OFF",
                                "subHeader": "ABOVE ₹349",
                                "discountTag": "FLAT DEAL"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/dinos-pizza-teachers-colony-parasia-road-rest487096",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "759666",
                            "name": "The Woods Cafe",
                            "cloudinaryImageId": "23f2e646af4a747829c649c6d1929e9a",
                            "locality": "Vivekanand Colony",
                            "areaName": "Chhindwara City",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Chaat",
                                "Fast Food",
                                "Beverages"
                            ],
                            "veg": true,
                            "parentId": "215436",
                            "avgRatingString": "--",
                            "sla": {
                                "deliveryTime": 55,
                                "lastMileTravel": 14.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "55-60 mins",
                                "lastMileTravelString": "14.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Temporarily closed for delivery"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/the-woods-cafe-vivekanand-colony-chhindwara-city-rest759666",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1051731",
                            "name": "Radhvi Restaurant And Cafe",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/25/dae70ea3-9fcb-4305-b009-b21fd7583ac7_1051731.jpg",
                            "locality": "Below Anand hospital",
                            "areaName": "Chhindwara City",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Chinese",
                                "South Indian",
                                "Pizzas",
                                "North Indian"
                            ],
                            "veg": true,
                            "parentId": "611459",
                            "avgRatingString": "--",
                            "sla": {
                                "deliveryTime": 52,
                                "lastMileTravel": 13.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-55 mins",
                                "lastMileTravelString": "13.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Temporarily closed for delivery"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/radhvi-restaurant-and-cafe-below-anand-hospital-chhindwara-city-rest1051731",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "662107",
                            "name": "Italy The Pizza",
                            "cloudinaryImageId": "906c0affa7d8ff78a3e4db88b4433cde",
                            "locality": "Ganesh Colony",
                            "areaName": "Chhindwara Locality",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Pizzas",
                                "Fast Food",
                                "Beverages"
                            ],
                            "veg": true,
                            "parentId": "397211",
                            "avgRatingString": "--",
                            "sla": {
                                "deliveryTime": 52,
                                "lastMileTravel": 12.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-55 mins",
                                "lastMileTravelString": "12.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextOpenTimeMessage": "Temporarily closed for delivery"
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {
                            "context": "seo-data-4a607371-702b-4809-8838-fd72fae6c986"
                        },
                        "cta": {
                            "link": "https://www.swiggy.com/city/chhindwara/italy-the-pizza-ganesh-colony-chhindwara-locality-rest662107",
                            "text": "RESTAURANT_MENU",
                            "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    }
                ]
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <div className="body">
                {ResData.map((restaurant) => (
                    <Restaurant key={restaurant.info.id} {...restaurant.info} />
                ))}
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
