const dayjs = require("dayjs");
const { SlashCommandBuilder } = require("discord.js");
const { DATE_TEXT_FORMAT } = require("../constants/common");

const data = new SlashCommandBuilder()
  .setName("member-info")
  .setDescription("Member info");

async function execute(interaction) {
  const userName = interaction?.user?.username;
  const joinedAt = dayjs(interaction?.member?.joinedAt).format(
    DATE_TEXT_FORMAT
  );

  await interaction.reply(
    `Hey ${userName}, bạn đã tham gia channel vào lúc: ${joinedAt}.`
  );
}

module.exports = {
  data,
  execute,
};
