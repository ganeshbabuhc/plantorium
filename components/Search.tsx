import React, { useEffect } from "react";

import API from "../service/API";
const Search = () => {
  useEffect(() => {
  
    const url = API.getURL('plants');
    API.getData('plants').then(res => res.json()) // expecting a json response
    .then(json => {
      console.log('sasasas',json)
    });

  },[]);
  return (
    <div>asghasa</div>
  )
}
export default Search;