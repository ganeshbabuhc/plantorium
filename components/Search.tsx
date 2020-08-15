import React, { useEffect } from "react";

import API from "../service/API";
const Search = () => {

const getPlants = () => {
   const data = API.getURL('plants');
    
}
  useEffect(() => {
  
  //  getPlants();

  },[]);
  return (
    <div>asghasa</div>
  )
}
export default Search;