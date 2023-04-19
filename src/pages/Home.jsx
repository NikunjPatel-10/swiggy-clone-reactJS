import React, { useEffect, useState } from "react";
import { Fetch_Restaurant } from "./../environment";
import RestaurantList from "../components/RestaurantList/RestaurantList";

function Home() {
  const [allRestaurant, setAllRestaurant] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);

  /**
   * get data from the api using fetch method
   */
  const getRestaurant = async () => {
    const RestaurantList = await fetch(Fetch_Restaurant);
    const restaurantData = await RestaurantList.json();

    // console.log(restaurantData);

    if (restaurantData) {
      setAllRestaurant(restaurantData.data.cards[0].data.data.cards);
      // console.log(allRestaurant);
    }
  };

  return (
    <div>
      <RestaurantList restaurantList={allRestaurant} />
    </div>
  );
}

export default Home;
