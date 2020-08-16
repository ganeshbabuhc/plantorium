import React, { useEffect } from "react";

import API from "../service/API";
import Constants from "../utils/Constants";
const Search = () => {
  const [plants, setPlants] = React.useState(async () => {
     const apiUrl = `${Constants.API_HOST}${'plants'}?token=${Constants.API_TOKEN}`;
      const response = await fetch(apiUrl,{
      mode: 'no-cors', // no-cors, *cors,
      
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
  });
  const json = await response.text();
  console.log(response);

  return json;
  });

const getPlants = async () => {
  //  const data = API.getURL('plants');
    const apiUrl = `${Constants.API_HOST}${'plants'}?token=${Constants.API_TOKEN}`;
  //    const response = await fetch(apiUrl, { method: 'GET'}).then(res => response.json()).then(res => {
  //       console.log(res);
  //    });
  //   //  console.log(response);
  //   const data = await response.json();
  //  console.log("asasa", data);
  //  conso


  // const response = fetch(apiUrl, {
  //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'no-cors', // no-cors, *cors,
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // });


  // response.then(data => {
  //   console.log(data);
  // });
  // console.log(data)

    
}
  // useEffect(() => {
  
  //  getPlants();

  // },[]);
  return (
    <div>asghasa</div>
  )
}
export default Search;