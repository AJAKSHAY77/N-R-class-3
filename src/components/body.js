import { useState } from "react";
import { restraulist } from "./Constants";
import Restaurantcard from "./Resturantcard";

function filterdata(searchtext, Restaurant) {
  const filterdata = Restaurant.filter((el) => el.info.name.includes(searchtext));
  return filterdata;
}

const Body = () => {
  //searchtext is local state variable
  const [Restaurant, setRestaurant] = useState(restraulist);
  const [searchtext, setsearchtext] = useState(); //use to create local state variable
  

  return (
    //search box

    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}

          //e.target.value is whatever you write in input
        />
        <button
          className="Search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterdata(searchtext, Restaurant);
            //update the state
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restlist">
        {Restaurant.map((el) => {
          return <Restaurantcard {...el.info} key={el.info.id}/>;
        })}
      </div>
    </>
  );
};

export default Body;
