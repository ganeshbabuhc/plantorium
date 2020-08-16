import React, { useEffect } from "react";

import API from "../service/API";
const Search = () => {

const getPlants = () => {
   const data = API.getURL('plants');
   console.log("asasa", data);
  //  conso
    
}
  useEffect(() => {
  
   getPlants();

  },[]);
  return (
    <div>asghasa</div>
  )
}
export default Search;