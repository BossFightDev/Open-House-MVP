import axios from "axios";
import { AsyncStorage } from 'react-native';
axios.defaults.withCredentials = true;
export const SERVER_URL = "https://openhousebackend.herokuapp.com/api";

export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
export const FORM_LAUNCHED = "FORM_LAUNCHED";
export const LOGGED_IN = "LOGGED_IN";
export const PROPERTY_FOUND = "PROPERTY_FOUND";
export const LEADS_FOUND = "LEADS_FOUND";
export const OPENHOUSE_ADDED = "OPENHOUSE_ADDED";
export const ADD_LEAD = "ADD_LEAD";
export const OPENHOUSE_FOUND = "OPENHOUSE_FOUND";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const ADD_HASHTAGS = "ADD_HASHTAGS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const IMAGE_MODAL_ON = "IMAGE_MODAL_ON";
export const IMAGE_MODAL_OFF = "IMAGE_MODAL_OFF";
export const CREATE_PIN = "CREATE_PIN";
export const CONFIRM_PIN = "CONFIRM_PIN";
export const ERROR_FOUND = "ERROR_FOUND";
export const RELAUNCH_OPENHOUSE = "RELAUNCH_OPENHOUSE";
export const LOAD_OPENHOUSE = "LOAD_OPENHOUSE";

export const createPin = pin => {
  return {
    type: "CREATE_PIN",
    payload: pin
  };
};

export const confirmPin = pin => {
  return {
    type: "CONFIRM_PIN",
    payload: pin
  };
};

export const authenticateUser = validation => {
  return {
    type: "AUTHENTICATE_USER",
    authenticate: validation
  };
};

export const launchForm = validation => {
  return {
    type: "FORM_LAUNCHED",
    launched: validation
  };
};

export const login = (username, password, navigation) => {
  return dispatch => {
    axios
      .post(`${SERVER_URL}/login`, { username, password })
      .then(data => {
        dispatch({
          type: "LOGGED_IN",
          payload: data.data
        });
        navigation.navigate("OpenHouses");
        return;
      })
      .catch(() => {
        console.log("Error in login action somewhere");
      });
  };
};

export const findProperty = (MLS, modal) => {
  return dispatch => {
    axios
      .post(`${SERVER_URL}/findProperty`, { MLS })
      .then(data => {
        console.log(`Successfully got response from findProperty`);
        if (data.data.property.address) {
          dispatch({
            type: "PROPERTY_FOUND",
            payload: data.data.property
          });
          return;
        }
        dispatch({
          type: "ERROR_FOUND",
          payload: { errorMessage: "No property found try another MLS" }
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR_FOUND",
          payload: { errorMessage: "No property found try another MLS" }
        });
        console.log("Error in findProperty action somewhere");
      });
  };
};

export const loadOpenHouses = () => {
  return async (dispatch) => {
    const openHouses = await AsyncStorage.getItem("OpenHouses");
    const loadedOpenHouses = JSON.parse(openHouses)
    loadedOpenHouses && 
    dispatch({
      type: LOAD_OPENHOUSE,
      payload: {openHouses: loadedOpenHouses}
    })
  }
}



export const addOpenHouse = (openHouseQuestions, oldOpenHouses, propertyInfo) => {
  return async (dispatch) => {
    const questions = {...openHouseQuestions}
    questions.property = {...propertyInfo}
    questions.guests = 0
    questions.date = Date()
    
    const openHouses = oldOpenHouses.slice()
    openHouses.unshift(questions)
    await AsyncStorage.setItem("OpenHouses", JSON.stringify(openHouses))
    dispatch({
    type: "OPENHOUSE_ADDED",
    payload: {openHouses}
    })
  }
}

export const relaunch = (openHouse, navigation, index) => {
  return dispatch =>{
    dispatch({
      type: RELAUNCH_OPENHOUSE,
      payload: openHouse
    })
    navigation.navigate("Signup", {relaunch: true, index})
  }
} 


export const addLead = (oldOpenHouse, name, email, phone, agent, source, current = 0) => {
  return async(dispatch) => {
    const openHouse = {...oldOpenHouse}
    const openHouses = openHouse.openHouses
    console.log(openHouses)
    if(openHouses[current].guests === 0) {
      openHouses[current].guests += 1
      openHouses[current].leads = [{name, email, phone, agent, source}]
    } else {
      openHouses[current].guests += 1
      openHouses[current].leads.unshift({name, email, phone, agent, source})
    }
    await AsyncStorage.setItem("OpenHouses", JSON.stringify(openHouses))
    return {
      type: ADD_LEAD,
      payload: openHouses
    }
  }
};

export const addQuestions = (
  phoneQ,
  agentQ,
  sourceQ,
  suggestQ,
  imageQ,
  image,
  priceQ,
  bedBathQ,
  sqftQ
) => {
  console.log("Made it to AddQuestions: " + image);
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
      sqftQ
    }
  };
};

export const addHashtags = (hashtagQ, hashtags) => {
  console.log("Hashtags: " + hashtags);
  return {
    type: ADD_HASHTAGS,
    payload: { hashtagQ, hashtags }
  };
};

export const modalOff = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_MODAL });
  };
};

export const toggleImageModal = option => {
  return dispatch => {
    if (option === "ON") {
      dispatch({ type: IMAGE_MODAL_ON });
    } else {
      dispatch({ type: IMAGE_MODAL_OFF });
    }
  };
};

export const setHouseImage = url => {
  return {
    type: "IMAGE_SELECTED",
    payload: url
  };
};

export const setOrientation = orientation => {
  return dispatch => {
    if (orientation === "landscape") {
      dispatch({
        type: "ORIENTATION_LANDSCAPE"
      });
      return;
    }
    dispatch({
      type: "ORIENTATION_PORTRAIT"
    });
  };
};
