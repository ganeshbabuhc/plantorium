import React, { useEffect } from "react";

import API from "../service/API";
const Search = () => {

const getPlants = async () => {
   const url = API.getURL('plants');
    const response = await API.getData('plants');
    const json = await response.json();
}
  useEffect(() => {
  
   getPlants();

  },[]);
  return (
    <div>asghasa</div>
  )
}
export default Search;