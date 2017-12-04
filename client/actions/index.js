export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

export const authenticateUser = (validation) => {
  return {
    type: 'AUTHENTICATE_USER',
    authenticate: validation,
  }
}
