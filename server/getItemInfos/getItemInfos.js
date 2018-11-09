import getHtmlContentFromUrl from "../utils/getHtmlContentFromUrl";
import genItemUrlFromShortCode from "./utils/genItemUrlFromShortCode";
import getUploaderUsernameFromHtml from "./utils/getUploaderUsernameFromHtml";
import checkHtmlToKnowIfShortcodeValid from "./utils/checkHtmlToKnowIfShortcodeValid";

const getItemInfos = async shortcode => {
  const itemUrl = genItemUrlFromShortCode(shortcode);
  const itemHtmlContent = await getHtmlContentFromUrl(itemUrl);

  const isValidShortcode = checkHtmlToKnowIfShortcodeValid(itemHtmlContent);

  if (isValidShortcode) {
    const infos = {
      stat: "OK",
      uploader: {
        username: getUploaderUsernameFromHtml(itemHtmlContent)
      }
    };
    return infos;
  } else {
    return { message: "Invalid shortcode" };
  }
};

export default getItemInfos;
