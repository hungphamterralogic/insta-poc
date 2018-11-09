module.exports = html => {
  // this will get the whole string "shortcode":"abcdef",
  //   so we need to cut off redundant parts and get "abcdef"
  const regex = /"shortcode":"[^\"]+"/g;
  const rawShortcodes = html.match(regex);

  const shortcodes = [];

  rawShortcodes.forEach(rawShortcode => {
    const shortcode = rawShortcode.substring(
      rawShortcode.indexOf(":") + 2,
      rawShortcode.lastIndexOf('"')
    );
    shortcodes.push(shortcode);
  });

  return shortcodes;
};
