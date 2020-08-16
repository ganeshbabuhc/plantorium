import Constants from '../utils/Constants';
// import fetch from 'node-fetch';
class API {
  public static getURL = (url:string): string => {
    return `${Constants.API_HOST}${url}?token=${Constants.API_TOKEN}`;
  };
  public getData = async (url:string) => {
    console.log('get api data');
    const apiUrl = `${Constants.API_HOST}${url}?token=${Constants.API_TOKEN}`;
     const response = await fetch(apiUrl, { method: 'GET'});
     console.log(response);
    return await response.json();
  };
}

export default API;