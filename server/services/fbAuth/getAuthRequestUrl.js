import fetchFromApiMiddleman from "../utils/fetchFromApiMiddleman";
import { REQUIRED_PERMISSIONS_SCOPES } from "../../../config";

module.exports = async () => {
  const scopes = REQUIRED_PERMISSIONS_SCOPES;
  const scope = scopes.join(" ");

  const response = await fetchFromApiMiddleman("/auth/getAuthRequestUrl", {
    scope
  });

  return response;
};
