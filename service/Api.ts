import Constants from '../utils/Constants';

class API {
  getURL = (url:string): string => {
    return `${Constants.BASE_URL}/${url}?${Constants.API_TOKEN}`
  }
}

export default API;