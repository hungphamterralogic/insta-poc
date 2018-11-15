import {
  MIDDLEMAN_SERVER_PORT as middleManServerPort,
  MAIN_SERVER_PORT
} from "../config";

export const FACEBOOK_CLIENT_ID = "284639592188546";
export const FACEBOOK_CLIENT_SECRET = "5e92d15b9a3d1af059ad2b50dc600a86";

export const TEST_ACCESS_TOKEN =
  "EAAEC4NHICoIBAG79DP76ZCZAJOYBYuufHdztn7mI1dNmYeI8bjF4IC866Ke464oydbbVSRFhUZBzvD3FQHTVYddFADsM3o0PdlNRsrXNdFoxhrX7SPcZAWYUDZAWZAdNWIacnYcLAFYrytirVRmRbAKJUXXhLTrMTbdKNjHjjkFAZDZD";

export const MIDDLEMAN_SERVER_PORT = middleManServerPort;
export const MIDDLEMAN_SERVER_URL = `http://localhost:${MIDDLEMAN_SERVER_PORT}`;

export const MAIN_SERVER_URL = `http://localhost:${MAIN_SERVER_PORT}`;

export const REST_URL = "https://graph.facebook.com";
export const API_VERSION = "v3.1";

export const USER_AUTHORIZATION_URL = `https://www.facebook.com/${API_VERSION}/dialog/oauth`;
export const EXCHANGE_ACCESS_TOKEN_URL = `${REST_URL}/${API_VERSION}/oauth/access_token`;
export const API_URL = `${REST_URL}/${API_VERSION}`;
