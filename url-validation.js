// node-fetch allow us to make http requisitions in node console
import fetch from "node-fetch";
import chalk from "chalk";

function handleError(err) {
  throw new Error(chalk.bgRedBright(err.message));
}

function buildUrlArray(links) {
  return links.map((objLink) => Object.values(objLink).join());
}

async function checkUrlStatus(urls) {
  try {
    const arrayStatus = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );

    return arrayStatus;
  } catch (err) {
    handleError(err);
  }
}

export async function urlValidate(urls) {
  const links = buildUrlArray(urls);
  const statusLinks = checkUrlStatus(links);

  const result = urls.map((object, index) => ({
    ...object,
    status: statusLinks[index],
  }));
  console.log("result", result);
  return result;
}
