import Constants from '../utils/Constants';

class API {
  public static getURL = (url:string): string => {
    return `${Constants.API_HOST}/${url}?${Constants.API_TOKEN}`
  }
}

export default API;