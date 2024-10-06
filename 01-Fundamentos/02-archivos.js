const fs = require("fs");

// Leyendo un archivo
const content = fs.readFileSync("README-React.md", "utf-8");

// Alterando la data del archivo
const newData = content.replace(/React/gi, "react");

const wordCount = newData.split(" ");

const reactWordCount = wordCount.reduce(
  (count, item) => (item === "react" ? count + 1 : count),
  0
);

const reactWordCountExpression = newData.match(/react/gi ?? []).length;

console.log("Palalabras: ", wordCount.length);
console.log("Palabras React: ", reactWordCount);
