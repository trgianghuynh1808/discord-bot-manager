const dayjs = require("dayjs");
const { SlashCommandBuilder } = require("discord.js");
const { DATE_TEXT_FORMAT } = require("../constants/common");
const { botService } = require("../services");

const data = new SlashCommandBuilder()
  .setName("deploy-info")
  .setDescription("Deploy info");

async function execute(interaction) {
  const deployedAt = await botService.getDeployInfo();
  const deployedAtText = deployedAt
    ? dayjs(deployedAt).format(DATE_TEXT_FORMAT)
    : "";

  const replyMessage = deployedAtText
    ? `Hey, lần gần đây nhất tôi được cập nhật là vào: ${deployedAtText}`
    : "Sorry, Tôi không tìm thấy dữ liệu";

  await interaction.reply(replyMessage);
}

module.exports = {
  data,
  execute,
};
