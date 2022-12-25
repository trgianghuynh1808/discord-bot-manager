const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.join(__dirname, "../data.json");

async function read() {
  const rawData = await fs.readFileSync(dataPath, "utf-8");
  const data = JSON.parse(rawData);
  return data;
}

async function update(newData) {
  try {
    await fs.writeFileSync(dataPath, JSON.stringify(newData));
  } catch (error) {
    console.log({ error });
  }
}

module.exports = {
  read,
  update,
};
