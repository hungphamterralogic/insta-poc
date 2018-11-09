import getMetaTagsThatHaveUsernameFromHtml from "./getMetaTagsHavingUsernameFromHtml";

const getUploaderUsernameFromHtml = html => {
  const metaTagsThatHaveUsername = getMetaTagsThatHaveUsernameFromHtml(html);

  const firstMetaTagThatHasUsername = metaTagsThatHaveUsername[0];

  const username = firstMetaTagThatHasUsername.substring(
    firstMetaTagThatHasUsername.indexOf("@") + 1,
    firstMetaTagThatHasUsername.indexOf(") on Instagram")
  );
  return username;
};

export default getUploaderUsernameFromHtml;
