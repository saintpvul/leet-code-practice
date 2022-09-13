const sortSentence = function (s) {
  if (s.trim() === "") return "";
  return s
    .trim()
    .split(" ")
    .map((word) => [word.match(/\d+/)[0], word])
    .sort((a, b) => a[0] - b[0])
    .map(([, word]) => word.replace(/\d+/, ""))
    .join(" ");
};
