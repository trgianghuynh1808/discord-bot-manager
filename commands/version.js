const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("version")
  .setDescription("version 1");

async function execute(interaction) {
  await interaction.reply("Hey hey");
}

module.exports = {
  data,
  execute,
};
