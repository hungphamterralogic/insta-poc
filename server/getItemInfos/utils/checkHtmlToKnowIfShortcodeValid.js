import getMetaTagsThatHaveUsernameFromHtml from "./getMetaTagsHavingUsernameFromHtml";

const checkHtmlToKnowIfShortcodeValid = html => {
  return !!getMetaTagsThatHaveUsernameFromHtml(html);
};

export default checkHtmlToKnowIfShortcodeValid;
