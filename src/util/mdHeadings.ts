export const createTag = (text: string, id: string) =>
  `${text
    .toLowerCase()
    .replace(/[^0-9A-Z\s]+/gi, "")
    .replace(/\W/g, "-")}-${id}`;

export const getHeadings = (mdText: string) => {
  const headingRegex = /^#{1,6}\s.+(\n|\r|\r\n)/gm;
  const rawHeadings = mdText.match(headingRegex);
  if (!rawHeadings) return [];
  return rawHeadings.map((heading: string) => {
    const matchedHashes = heading.match(/^#+/);
    let depth = 1;
    if (matchedHashes) depth = matchedHashes[0].split("").length;

    return {
      text: heading.replace(/^#+\s/g, "").replace(/(\n|\r|\r\n)$/g, ""),
      depth,
    };
  });
};
