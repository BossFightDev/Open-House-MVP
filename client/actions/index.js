import axios from 'axios';
axios.defaults.withCredentials = true;
const SERVER_URL = "https://openhousebackend.herokuapp.com/api";


export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const FORM_LAUNCHED = 'FORM_LAUNCHED';
export const LOGGED_IN = 'LOGGED_IN';
export const PROPERTY_FOUND = 'PROPERTY_FOUND';

export const authenticateUser = (validation) => {
  return {
    type: 'AUTHENTICATE_USER',
    authenticate: validation,
  }
}

export const launchForm = (validation) => {
  return {
    type:'FORM_LAUNCHED',
    launched: validation,
  }
}

export const login = (username, password) => {
  axios.post(`${SERVER_URL}/login`, {username, password})
    .then((data) => {
      console.log(`Successfully got response from login`)
      return {
        type: 'LOGGED_IN',
        payload: data.data.user,
      }
    })
    .catch(()=> {
      console.log('Error in login action somewhere')
    })
}

export const findProperty = (MLS) => {
  axios.post(`${SERVER_URL}/findProperty`, {MLS})
    .then((data) => {
      console.log(`Successfully got response from findProperty`)
      return {
        type: 'PROPERTY_FOUND',
        payload: data.data.property,
      }
    })
    .catch(()=> {
      console.log('Error in login action somewhere')
    })
}