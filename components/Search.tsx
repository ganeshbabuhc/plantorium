import React, { useEffect } from "react";
import API from "../service/Api";
const Search = () => {
  useEffect(() => {
    const url = API.getUrl('plants');
     fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
  },[])
  return (
    <div>asghasa</div>
  )
}
export default Search;