import {
  MIDDLEMAN_SERVER_PORT as middleManServerPort,
  FACEBOOK_CLIENT_ID as fbClientId,
  FACEBOOK_CLIENT_SECRET as fbClientSecret,
  MAIN_SERVER_PORT
} from "../config";

export const FACEBOOK_CLIENT_ID = fbClientId;
export const FACEBOOK_CLIENT_SECRET = fbClientSecret;

export const MIDDLEMAN_SERVER_PORT = middleManServerPort;
export const MIDDLEMAN_SERVER_URL = `http://localhost:${MIDDLEMAN_SERVER_PORT}`;

export const MAIN_SERVER_URL = `http://localhost:${MAIN_SERVER_PORT}`;

export const REST_URL = "https://graph.facebook.com";
export const API_VERSION = "v3.1";

export const USER_AUTHORIZATION_URL = `https://www.facebook.com/${API_VERSION}/dialog/oauth`;
export const EXCHANGE_ACCESS_TOKEN_URL = `${REST_URL}/${API_VERSION}/oauth/access_token`;
export const API_URL = `${REST_URL}/${API_VERSION}`;
