const get = require("lodash/get");
const path = require("node:path");
const jsonHelper = require("../helpers/json");

const dataPath = path.join(__dirname, "../data/bot.json");

async function saveDeployInfo() {
  let botData = (await jsonHelper.read(dataPath)) ?? {};
  botData.deployedAt = new Date();
  await jsonHelper.update(dataPath, botData);
}

async function getDeployInfo() {
  const botData = await jsonHelper.read(dataPath);

  return get(botData, "deployedAt", "");
}

module.exports = {
  saveDeployInfo,
  getDeployInfo,
};
