import chalk from "chalk";
import { getFile } from "./index.js";
import { urlValidate } from "./url-validation.js";

// return the path of the files and what is inputed in the cmd
const path = process.argv;

async function textProcess(filePath) {
  const result = await getFile(filePath[2]);

  if (filePath[3] === "validate") {
    console.log(
      chalk.bgBlueBright("Validated links: ", await urlValidate(result))
    );
  } else {
    console.log(chalk.bgWhiteBright("This is your links list: ", result));
  }
}

textProcess(path);
