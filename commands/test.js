const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("echo")
  .setDescription("Replies with your input!")
  .addStringOption((option) =>
    option.setName("input").setDescription("The input to echo back")
  )
  .addStringOption((option) =>
    option.setName("input2").setDescription("The input1 to echo back")
  );

async function execute(interaction) {
  const reason = interaction.options.getString("input");
  console.log(reason);
}

module.exports = {
  data,
  execute,
};
