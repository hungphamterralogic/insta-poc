import express from "express";
import getHashtaggedItemShortcodes from "./getHashtaggedItemShortcodes";
import getItemInfos from "./getItemInfos/getItemInfos";

const app = express();
const port = 3000;

app.get("/api/getHashtaggedItemShortcodes", async (req, res) => {
  const { hashtag, quantity } = req.query;

  const hasValidQueryParams = hashtag && Number(quantity) > 0;

  if (hasValidQueryParams) {
    const hashtaggedItemShortcodes = await getHashtaggedItemShortcodes({
      hashtag,
      quantity
    });
    res.json(hashtaggedItemShortcodes);
  } else {
    res.json({
      message:
        "hashtag or quantity params in url's query is undefined or invalid"
    });
  }
});

app.get("/api/getItemInfos", async (req, res) => {
  const { shortcode } = req.query;

  const hasValidShortcodeSyntax = shortcode && typeof shortcode === "string";

  if (hasValidShortcodeSyntax) {
    const itemInfos = await getItemInfos(shortcode);
    res.json(itemInfos);
  } else {
    res.json({ message: "Invalid shortcode" });
  }
});

app.use((_, res) => {
  res.json({ message: "You went to the wrong path, dude!!!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
