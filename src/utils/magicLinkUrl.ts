export function getMagicLink() {
  const queries = decodeURI(window.location.search).replace("?", "").split("&");

  let i = 0;
  for (const query of queries) {
    const [key, value] = query.split(/=(.*)/s);

    if (key === "magic_link") return value;
  }

  return "";
}

export function magicLinkUrl() {
  const magicLink = getMagicLink();

  if (!magicLink) return "";

  return `${window.location.href.split("?")[0]}/scanned?magic_link=${magicLink}`;
}
