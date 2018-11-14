import { INSTA_API_MIDDLEMAN_SERVER_PORT } from "../config";

export const FACEBOOK_CLIENT_ID = "284639592188546";
export const FACEBOOK_CLIENT_SECRET = "5e92d15b9a3d1af059ad2b50dc600a86";

export const MIDDLEMAN_PORT = INSTA_API_MIDDLEMAN_SERVER_PORT;
export const MIDDLEMAN_URL = `http://localhost:${MIDDLEMAN_PORT}`;

export const USER_AUTHORIZATION_URL =
  "https://www.facebook.com/v3.1/dialog/oauth";

export const EXCHANGE_ACCESS_TOKEN_URL =
  "https://graph.facebook.com/v3.1/oauth/access_token";
