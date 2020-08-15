import Constants from '../utils/Constants';
import fetch from 'node-fetch';
class API {
  public static getURL = (url:string): string => {
    return `${Constants.API_HOST}${url}?token=${Constants.API_TOKEN}`;
  };
  public static getData = async (url:string): Promise<any> => {
    return fetch(API.getURL(url), { method: 'GET'});
  };
}

export default API;