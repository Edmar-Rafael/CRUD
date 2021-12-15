const {
  REACT_APP_JWT,
  REACT_APP_EMAIL,
  REACT_APP_PASSWORD,
  REACT_APP_SESSION_KEY
} = process.env

export const JWT = String(REACT_APP_JWT)
export const EMAIL = String(REACT_APP_EMAIL)
export const PASSWORD = String(REACT_APP_PASSWORD)
export const SESSION_KEY = String(REACT_APP_SESSION_KEY)