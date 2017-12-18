import axios from 'axios';
axios.defaults.withCredentials = true;
const SERVER_URL = "https://openhousebackend.herokuapp.com/api";


export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const FORM_LAUNCHED = 'FORM_LAUNCHED';
export const LOGGED_IN = 'LOGGED_IN';
export const PROPERTY_FOUND = 'PROPERTY_FOUND';
export const LEADS_FOUND = 'LEADS_ FOUND';
export const OPENHOUSE_ADDED = 'OPENHOUSE_ADDED';
export const LEAD_ADDED = 'LEAD_ADDED';
export const OPENHOUSE_FOUND = 'OPENHOUSE_FOUND';

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
      console.log('Error in findProperty action somewhere')
    })
}

export const findLeads = (openHouseId) => {
  axios.post(`${SERVER_URL}/leads`, {openHouseId})
    .then((data) => {
      console.log(`Successfully got response from leads`)
      return {
        type: 'LEADS_FOUND',
        payload: data.data.leads,
      }
    })
    .catch(()=> {
      console.log('Error in findLeads action somewhere')
    })
}

export const addOpenHouse = 
(id, date, image, phoneQ,agentQ, sourceQ, imageQ,
 priceQ, bedbathQ, sqftq, hashtagQ, hashtags) => {
  
  axios.post(`${SERVER_URL}/newOpenHouse`, 
  { id, date, image, phoneQ, agentQ, sourceQ, imageQ,
    priceQ, bedbathQ, sqftq, hashtagQ, hashtags })
    .then((data) => {
      console.log(`Successfully got response from newOpenHouse`)
      return {
        type: 'OPENHOUSE_ADDED',
        payload: data.data.openHouse,
      }
    })
    .catch(()=> {
      console.log('Error in addOpenHouse action somewhere')
    })
}

export const addLead = (openHouseId, name, email, phone, agent, source) => {
  axios.post(`${SERVER_URL}/addlead`, {openHouseId, name, email, phone, agent, source})
  .then((data)=> {
    console.log('Succesfully got response from addlead')
    return {
      type: 'LEAD_ADDED'
    }
  })
}


