import fs from "fs";
import chalk from "chalk";

function handleError(err) {
  throw new Error(chalk.bgRedBright(`File not found, ${err.code}`));
}

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
  } catch (err) {
    handleError(err);
  } finally {
    console.log(chalk.bgBlueBright("Operation works"));
  }
}

getFile();
