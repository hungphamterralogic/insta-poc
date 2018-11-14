import fetchInsta from "../utils/fetchFromInstaApiMiddleman";

module.exports = async () => {
  const scopes = ["email", "user_photos"];
  const scope = scopes.join(" ");

  const response = await fetchInsta("/getAuthRequestUrl", { scope });

  return response;
};
