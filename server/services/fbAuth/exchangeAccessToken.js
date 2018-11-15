import fetchFromApiMiddleman from "../utils/fetchFromApiMiddleman";

module.exports = async code => {
  const response = await fetchFromApiMiddleman("/exchangeAccessToken", {
    code
  });
  return response;
};
