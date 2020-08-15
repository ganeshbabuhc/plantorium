import Constants from '../utils/Constants';
import fetch from 'node-fetch';
class API {
  public static getURL = (url:string): string => {
    return `${Constants.API_HOST}${url}?token=${Constants.API_TOKEN}`;
  };
  public static getData = async (url:string): Promise<any> => {
     fetch(`${Constants.API_HOST}${url}?token=${Constants.API_TOKEN}`, { method: 'GET'});
    const response = await API.getData('plants');
    return await response.json();
  };
}

export default API;