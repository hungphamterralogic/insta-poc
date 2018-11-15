import fetchFromApiMiddleman from "../utils/fetchFromApiMiddleman";

module.exports = async code => {
  const response = await fetchFromApiMiddleman("/auth/exchangeAccessToken", {
    code
  });
  return response;
};
