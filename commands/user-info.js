const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("user-info")
  .setDescription("Provides information about the user.");

async function execute(interaction) {
  console.log({ interaction: interaction });
  await interaction.reply(
    `This command was run by ${interaction?.user?.username}, who joined on ${interaction?.member?.joinedAt}.`
  );
}

module.exports = {
  data,
  execute,
};
