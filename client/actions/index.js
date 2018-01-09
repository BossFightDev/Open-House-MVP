import axios from 'axios';
axios.defaults.withCredentials = true;
export const SERVER_URL = "https://openhousebackend.herokuapp.com/api";


export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const FORM_LAUNCHED = 'FORM_LAUNCHED';
export const LOGGED_IN = 'LOGGED_IN';
export const PROPERTY_FOUND = 'PROPERTY_FOUND';
export const LEADS_FOUND = 'LEADS_ FOUND';
export const OPENHOUSE_ADDED = 'OPENHOUSE_ADDED';
export const LEAD_ADDED = 'LEAD_ADDED';
export const OPENHOUSE_FOUND = 'OPENHOUSE_FOUND';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const ADD_HASHTAGS = 'ADD_HASHTAGS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const IMAGE_MODAL_ON = 'IMAGE_MODAL_ON';
export const IMAGE_MODAL_OFF = 'IMAGE_MODAL_OFF';
export const CREATE_PIN = 'CREATE_PIN'
export const CONFIRM_PIN = 'CONFIRM_PIN'

export const createPin = (pin) => {
  return {
    type: 'CREATE_PIN',
    payload: pin
  }
}

export const confirmPin = (pin) => {
  return {
    type: 'CONFIRM_PIN',
    payload: pin
  }
}

export const authenticateUser = (validation) => {
  return {
    type: 'AUTHENTICATE_USER',
    authenticate: validation,
  }
}

export const launchForm = (validation) => {
  return {
    type: 'FORM_LAUNCHED',
    launched: validation,
  }
}

export const login = (username, password, navigation) => {
  return (dispatch) => {
    axios.post(`${SERVER_URL}/login`, { username, password })
      .then((data) => {
        console.log(`Successfully got response from login`)
        // const validated = authenticateUser(true); // <~~ change this to true or false
        //     if (validated.authenticate)
        console.log(JSON.stringify(data.data))
        dispatch ({
          type: 'LOGGED_IN',
          payload: data.data,
        });
        navigation.navigate("OpenHouses");
        return;
      })
      .catch(() => {
        console.log('Error in login action somewhere')
      })
  }
}

export const findProperty = (MLS, modal) => {
  return (dispatch) => {
    axios.post(`${SERVER_URL}/findProperty`, { MLS })
      .then((data) => {
        console.log(`Successfully got response from findProperty`)
        dispatch({
          type: 'PROPERTY_FOUND',
          payload: data.data.property
        })
        return;
      })
      .catch(() => {
        console.log('Error in findProperty action somewhere')
      })
  }
}

export const findLeads = (uID) => {
  return (dispatch) => {
    axios.post(`${SERVER_URL}/leads`, { uID })
      .then((data) => {
        console.log(`Successfully got response from leads`)
        dispatch({
          type: 'LEADS_FOUND',
          payload: data.data,
        })
        return
      })
      .catch(() => {
        console.log('Error in findLeads action somewhere')
      })
  }
}

export const addOpenHouse =
  ( uId, id, questions) => {
    const { image, phoneQ, agentQ, sourceQ, suggestQ, imageQ,
    priceQ, bedBathQ, sqftQ, hashtagQ, hashtags } = questions;
    const date = new Date();
    console.log("ID: " + id)
    return (dispatch) => {
      axios.post(`${SERVER_URL}/newOpenHouse`,
        {
          uId, id, date, image, phoneQ, agentQ, sourceQ, suggestQ, imageQ,
          priceQ, bedBathQ, sqftQ, hashtagQ, hashtags
        })
        .then((data) => {
          console.log(`Successfully got response from newOpenHouse`)
          dispatch ({
            type: 'OPENHOUSE_ADDED',
            payload: data.data.openHouse,
          })
          return
        })
        .catch(() => {
          console.log('Error in addOpenHouse action somewhere')
        })
    }
  }

export const addLead = (openHouseId, name, email, phone, agent, source) => {
  return (dispatch) => {
    axios.post(`${SERVER_URL}/addlead`, { openHouseId, name, email, phone, agent, source })
      .then((data) => {
        console.log('Succesfully got response from addlead')
        return {
          type: 'LEAD_ADDED'
        }
      })
  }
}

export const addQuestions = (phoneQ, agentQ, sourceQ, suggestQ, imageQ, image, priceQ, bedBathQ, sqftq) => {
  console.log("Made it to AddQuestions: "+ image)
  return {
    type: ADD_QUESTIONS,
    payload: {
      phoneQ,
      agentQ,
      sourceQ,
      suggestQ,
      imageQ,
      image,
      priceQ,
      bedBathQ,
      sqftq
    }
  }
}


export const addHashtags = (hashtagQ, hashtags) => {
  console.log("Hashtags: " + hashtags)
  return {
    type: ADD_HASHTAGS,
    payload: { hashtagQ, hashtags }
  }
}

export const modalOff = () => {
  return (dispatch) => {
    dispatch({type: TOGGLE_MODAL,})
  }
}

export const toggleImageModal = (option) => {
  return (dispatch) => {
    if (option === 'ON'){
      dispatch({type: IMAGE_MODAL_ON})
    } else {
      dispatch({type: IMAGE_MODAL_OFF})
    }
  }
}

export const setOrientation = (orientation) => {
  return(dispatch) => {
    if (orientation === 'landscape') {
      dispatch({
        type: 'ORIENTATION_LANDSCAPE'
      })
      return;
    }
    dispatch({
      type: 'ORIENTATION_PORTRAIT'
    })
  }
}