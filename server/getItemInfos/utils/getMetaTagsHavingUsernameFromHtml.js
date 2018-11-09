const getMetaTagsHavingUsernameFromHtml = html => {
  return html.match(/<meta.+\(@.+\) on Instagram.+\/>/g);
};

export default getMetaTagsHavingUsernameFromHtml;
