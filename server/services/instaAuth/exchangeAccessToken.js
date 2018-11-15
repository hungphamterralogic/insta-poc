import fetchInsta from "../utils/fetchFromInstaApiMiddleman";

module.exports = async code => {
  const response = await fetchInsta("/exchangeAccessToken", { code });
  return response;
};
