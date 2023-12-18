/*
  Footnote re-labeller.

  Relabels footnotes of the form [^...] to numeric.
  Replaces every label.

  Basically the same as https://gist.github.com/dustbringer/6675f9aad4ff47725933abeb7affb891
 */

/******************** Helper ********************/

const isNum = (s: string) => Number.isInteger(s) || /^\d+$/.test(s);

// Looks for footnote target in the form [^...]:
// Assuming:
//   - no text before it
//   - ending with a colon
//   - no whitespace in label
//   - only symbols in label are "_", ".", and "-"
const getLabels = (s: string) =>
  [...s.matchAll(/^[^\S\r\n]*\[\^([a-zA-Z0-9_.-]+)\]:/gm)].map((m) => m[1]);

const getIntLabels = (s: string) =>
  [...s.matchAll(/^[^\S\r\n]*\[\^(\d+)\]:/gm)].map((m) => m[1]);

// Gets largest integer in the array
const getMaxInt = (matches: string[]) =>
  Math.max(...matches.filter((m) => isNum(m)).map((m) => parseInt(m, 10)));

/******************** Functions ********************/

/*
  Relabels everything with ascending integers
 */
export const relabelAll = (text: string, indexFrom = 1) => {
  if (indexFrom < 0) console.error("indexFrom must be non-negative");
  let output = text;

  /*
    Replace all labels with unique number that is not used later.
    (We have no clashes between old and new because all previous numbers are smaller)
   */
  let matches = getLabels(text);
  // console.log(matches);
  matches.forEach((m, i) => {
    // Start indexing from largest unused number that is larger than any final indexes
    const start = Math.max(getMaxInt(matches) + 1, matches.length + indexFrom);
    output = output.replaceAll(`[^${m}]`, `[^${i + start}]`);
  });

  /*
    Replace all labels with i+indexFrom.
    (At this point all labels are "large" numbers in ascending order,
    we can replace with number they appear without any problems.)
   */
  matches = getLabels(output);
  // console.log(matches);
  matches.forEach((m, i) => {
    output = output.replaceAll(`[^${m}]`, `[^${i + indexFrom}]`);
  });

  return output;
};

/*
  Relabels only the integer labels with ascending integers
 */
export const relabelInt = (text: string, indexFrom = 1) => {
  if (indexFrom < 0) throw new Error("indexFrom must be non-negative");
  let output = text;

  /*
    Replace all labels with unique number that is not used later.
    (We have no clashes between old and new because all previous numbers are smaller)
   */
  let matches = getIntLabels(text);
  matches.forEach((m, i) => {
    // Start indexing from largest unused number that is larger than any final indexes
    const start = Math.max(getMaxInt(matches) + 1, matches.length + indexFrom);
    output = output.replaceAll(`[^${m}]`, `[^${i + start}]`);
  });

  /*
    Replace all labels with i+indexFrom.
    (At this point all labels are "large" numbers in ascending order,
    we can replace with number they appear without any problems.)
   */
  matches = getIntLabels(output);
  matches.forEach((m, i) => {
    output = output.replaceAll(`[^${m}]`, `[^${i + indexFrom}]`);
  });

  return output;
};
