import genInstaPageUrlOfHashtag from "./utils/genInstaPageUrlOfHashtag";
import getHtmlContentFromUrl from "../utils/getHtmlContentFromUrl";
import getHashtaggedItemShortcodesFromHtml from "./utils/getHashtaggedItemShortcodesFromHtml";

const getHashtaggedItemShortcodes = async ({ hashtag, quantity }) => {
  const instaUrl = genInstaPageUrlOfHashtag(hashtag);
  const htmlContent = await getHtmlContentFromUrl(instaUrl);
  const hashtaggedItemShortcodes = getHashtaggedItemShortcodesFromHtml(
    htmlContent
  );
  /// TODO: get enough hashtagged items according to quantity param
  return {
    stat: "OK",
    shortcodes: hashtaggedItemShortcodes,
    total: hashtaggedItemShortcodes.length
  };
};

export default getHashtaggedItemShortcodes;
