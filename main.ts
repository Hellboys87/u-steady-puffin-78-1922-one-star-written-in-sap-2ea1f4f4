const fs = require("fs");
const path = require("path");

const entry =
  "One star. She only drags me into the sunlight when guests are coming, so I have learned to associate being loved with the sound of the doorbell.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), entry + "\n", "utf8");
