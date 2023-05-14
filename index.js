import fs from "fs";
import chalk from "chalk";

function handleError(err) {
  throw new Error(chalk.bgRedBright(`File not found, ${err.code}`));
}

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    return extractLinks(text);
  } catch (err) {
    handleError(err);
  } finally {
    console.log(chalk.bgBlueBright("Operation works"));
  }
}

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/[^$#\s].[^\s]*)\)/gm;
  const arrayResult = [];
  let temporary;
  while ((temporary = regex.exec(text)) !== null) {
    arrayResult.push(temporary);
  }

  return arrayResult;
}
export { getFile };
