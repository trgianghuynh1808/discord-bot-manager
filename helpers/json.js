const fs = require("node:fs");
const { getValidArray } = require("../utils");

async function read(path) {
  const rawData = await fs.readFileSync(path, "utf-8");
  if (!rawData) {
    return undefined;
  }

  const data = JSON.parse(rawData);
  return data;
}

async function readDetail(path, id) {
  const data = await read(path);
  const foundItem = getValidArray(data).find((item) => item?.id === id);

  if (!foundItem) {
    return undefined;
  }

  return foundItem;
}

async function update(path, newData) {
  try {
    await fs.writeFileSync(path, JSON.stringify(newData));
  } catch (error) {
    throw error;
  }
}

async function updateById(path, id, newData) {
  try {
    let data = await read(path);
    const foundDataIndex = getValidArray(data).findIndex(
      (item) => item?.id === id
    );

    if (foundDataIndex < 0) {
      throw Error("Item not found");
    }
    const foundItem = data[foundDataIndex];
    data[foundDataIndex] = {
      id: foundItem?.id,
      ...foundItem,
      ...newData,
    };

    await update(path, data);
  } catch (error) {
    throw error;
  }
}

async function replaceById(path, id, newData) {
  try {
    let data = await read(path);
    const foundDataIndex = getValidArray(data).findIndex(
      (item) => item?.id === id
    );

    if (foundDataIndex < 0) {
      throw Error("Item not found");
    }
    const foundItem = data[foundDataIndex];
    data[foundDataIndex] = {
      id: foundItem?.id,
      ...newData,
    };

    await update(path, data);
  } catch (error) {
    throw error;
  }
}

async function deleteById(path, id) {
  try {
    let data = await read(path);
    const foundItem = getValidArray(data).find((item) => item?.id === id);

    if (!foundItem) {
      throw Error("Item not found");
    }

    data = getValidArray(data).filter((item) => item?.id !== foundItem?.id);
    await update(path, data);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  read,
  readDetail,
  update,
  updateById,
  replaceById,
  deleteById,
};
