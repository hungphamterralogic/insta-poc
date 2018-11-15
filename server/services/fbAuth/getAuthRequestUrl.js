import fetchFromApiMiddleman from "../utils/fetchFromApiMiddleman";

module.exports = async () => {
  const scopes = ["email", "user_photos"];
  const scope = scopes.join(" ");

  const response = await fetchFromApiMiddleman("/auth/getAuthRequestUrl", { scope });

  return response;
};
