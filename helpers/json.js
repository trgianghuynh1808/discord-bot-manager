const fs = require("node:fs");

async function read(path) {
  const rawData = await fs.readFileSync(path, "utf-8");
  if (!rawData) {
    return undefined;
  }

  const data = JSON.parse(rawData);
  return data;
}

async function update(path, newData) {
  try {
    await fs.writeFileSync(path, JSON.stringify(newData));
  } catch (error) {
    console.log({ error });
  }
}

module.exports = {
  read,
  update,
};
