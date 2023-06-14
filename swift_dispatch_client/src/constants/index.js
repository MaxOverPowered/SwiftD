export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

export const GOOGLE_AUTH_URL = "http://localhost:8080" + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;