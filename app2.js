import React from "react"
import  ReactDOM from "react-dom/client"


const Title = ()=>(
    
    <>
       <a href="/">

      <img className="img"
       alt="Food_villa"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgV4ITetYVZB2Pzbp_3k-feriyr6obtnk0g&usqp=CAU"/>

      </a>
    </>  
      
)
// const styleobj = {
//     backgroundColor : "red"
// }
const HeaderComponent = ()=>(
    <div className="heading">
    <Title/>
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>

    </div>
)

// const Burger  = {
//     image :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gqw0tko9ewge1fsfr2wi",
//     name:"Burger King",
//     cousines:["Burgers","American"],
//     rating:"4.2"
// }



// config driven UI

const restraulist = [
    {
      "info": {
        "id": "70068",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "juffeaqtqr7jwoe3h7j8",
        "locality": "Saharanpur Road",
        "areaName": "Majra",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "70068",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "2456",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 02:55:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "76% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-saharanpur-road-majra-dehradun-70068",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "546799",
        "name": "Wat-a-Burger! - India ka Burger",
        "cloudinaryImageId": "mvl9tkihegusushbs1gl",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Continental",
          "American",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "546799",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "384458",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 8,
          "serviceability": "SERVICEABLE",
          "slaString": "59 mins",
          "lastMileTravelString": "8.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wat-a-burger-india-ka-burger-road-rajpur-dehradun-546799",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "575232",
        "name": "Veg Daawat by Behrouz",
        "cloudinaryImageId": "t3bktvjxundwn00qgauq",
        "locality": "Rajpura Road",
        "areaName": "Hathibarkala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "575232",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "344904",
        "avgRatingString": "4.1",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 73,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "73 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹449",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/veg-daawat-by-behrouz-rajpura-road-hathibarkala-dehradun-575232",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "566491",
        "name": "Faasos Signature Wraps & Rolls",
        "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "566491",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "340366",
        "avgRatingString": "3.9",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 73,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "73 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-road-rajpur-dehradun-566491",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365569",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "365569",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "21809",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 79,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "79 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-road-rajpur-dehradun-365569",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "382177",
        "name": "Brick House Kitchen",
        "cloudinaryImageId": "jnaosopzlxciwtpxpeex",
        "locality": "Sahastradhara Road",
        "areaName": "Chironwali",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Continental"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "382177",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "259177",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 8.6,
          "serviceability": "SERVICEABLE",
          "slaString": "59 mins",
          "lastMileTravelString": "8.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/brick-house-kitchen-sahastradhara-road-chironwali-dehradun-382177",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365571",
        "name": "Oven Story Pizza",
        "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "365571",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "3534",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 80,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "80 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-road-rajpur-dehradun-365571",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365574",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "zpfjhtdmeedg8tkkcg9n",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "365574",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "4925",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 80,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "80 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-road-rajpur-dehradun-365574",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "301702",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "y9cognexebql5fgygvmp",
        "locality": "Rajpur Road",
        "areaName": "Hathibarkala Salwala",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "301702",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "2438",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 65,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "65 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/barbeque-nation-rajpur-road-hathibarkala-salwala-dehradun-301702",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365570",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "49c27c020e946f8f4fc13fdc9038525c",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "365570",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5700
        },
        "parentId": "1803",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 80,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "80 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-road-rajpur-dehradun-365570",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "89564",
        "name": "Ubq By Barbeque Nation",
        "cloudinaryImageId": "jtvzici548fquo7ieoch",
        "locality": "Rajpur Road",
        "areaName": "Hathibarkala Salwala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "89564",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "10804",
        "avgRatingString": "3.8",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 77,
          "lastMileTravel": 9.1,
          "serviceability": "SERVICEABLE",
          "slaString": "77 mins",
          "lastMileTravelString": "9.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-rajpur-road-hathibarkala-salwala-dehradun-89564",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "333532",
        "name": "Sarovar Portico",
        "cloudinaryImageId": "ojccj2pdugzpcs8wpm5a",
        "locality": "Rajpur Road",
        "areaName": "Rajpur",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Asian",
          "Chinese"
        ],
        "feeDetails": {
          "restaurantId": "333532",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "11775",
        "avgRatingString": "--",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 9.4,
          "serviceability": "SERVICEABLE",
          "slaString": "52 mins",
          "lastMileTravelString": "9.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sarovar-portico-road-rajpur-dehradun-333532",
        "type": "WEBLINK"
      }
    }
  ]
const Restaurantcard=({name,cuisines,cloudinaryImageId,locality})=>{
  
 
     return(
      <div className="card">
            
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
       <h2>{name}</h2>
       <h3>{cuisines.join(", ")}</h3> 
       <h4>{locality}</h4> 

     </div>
     )


}
const Body = ()=>(
   <div className="restlist">
    {
      restraulist.map((el)=>{
        return <Restaurantcard {...el.info}/>
      })
    }
    
   
   </div>
)
const Footer = ()=>{
    return(
        <>
         <h1>Footer</h1>
        </> 
    )
    }


const Applayout =()=>(  
   
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>

     
)




const  root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>)
