export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const FORM_LAUNCHED = 'FORM_LAUNCHED';

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
