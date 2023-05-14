import { getFile } from "./index.js";

// return the path of the files and what is inputed in the cmd
const path = process.argv;

async function textProcess(filePath) {
  const result = await getFile(filePath[2]);
}

textProcess(path);
