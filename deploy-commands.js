require("dotenv").config();
const { REST, Routes } = require("discord.js");
const fs = require("node:fs");
const { botToken, clientId } = require("./config");

function getCommands() {
  let commands = [];
  const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
  }

  return commands;
}

async function deployCommands(commands) {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );
    const rest = new REST({ version: "10" }).setToken(botToken);
    const data = await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
}

function main() {
  const commands = getCommands();
  deployCommands(commands);
}

main();
