import fetchInsta from "../utils/fetchFromInstaApiMiddleman";

module.exports = async () => {
  const { code } = req.query;
  const response = await fetchInsta("/exchangeAccessToken", { code });

  return response;
};