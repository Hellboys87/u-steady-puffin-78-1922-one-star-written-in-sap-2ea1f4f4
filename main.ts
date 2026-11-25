const fs = require("fs");
const path = require("path");

const entry =
  "One star. She only hauls me into the sunlight when guests are coming, so I now think being loved sounds like a doorbell, then ends with being dragged back to my dark corner.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), entry + "\n", "utf8");
