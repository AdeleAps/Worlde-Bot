import { Events, PermissionsBitField } from "discord.js";

export function run(client) {
  client.on(Events.InteractionCreate, async (interaction) => {
    const isAdmin = interaction.member.permissions.has(
      PermissionsBitField.Flags.Administrator
    );

    if (!interaction.isChatInputCommand()) return;

    if (isAdmin) {
      if (interaction.commandName === "scrape") {
        await interaction.reply("yes sirrrr");
      }
    }
  });
}
