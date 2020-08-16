import React, { useEffect } from "react";
import fetch from 'node-fetch';

import API from "../service/API";
import Constants from "../utils/Constants";
const Search = () => {

const getPlants = async () => {
  console.log(fetch);
  //  const data = API.getURL('plants');
  //   const apiUrl = `${Constants.API_HOST}${'plants'}?token=${Constants.API_TOKEN}`;
  //    const response = await fetch(apiUrl, { method: 'GET'});
  //    console.log(response);
  //   const data = await response.json();
  //  console.log("asasa", data);
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