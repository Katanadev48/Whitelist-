const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

const setupChannels = new Set();

module.exports = {
    name: "setup",
    description: "To setup the whitelist",
    options: [
        {
            name: 'channel',
            description: 'The channel to send the whitelist embed',
            type: 7,
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const mentionedChannel = interaction.options.getChannel('channel');

        if (setupChannels.has(mentionedChannel.id)) {
            return interaction.reply('Whitelist has already been sent to this channel.');
        }

        const embed = new EmbedBuilder()
            .setDescription(`> **Click the button below to link your Discord account to your serial and grant access to the server.**`)
            .setTitle('NTS Community Whitelist System©')
            .setURL('https://discord.gg/2qW59jSjPv')
            .setColor('#FFFFFF')
            .setImage('https://static.wixstatic.com/media/13dd02_f9e1cf8f783a4430b74b2fe05e4a5e06~mv2.gif/v1/fill/w_1152,h_648,al_c/13dd02_f9e1cf8f783a4430b74b2fe05e4a5e06~mv2.gif')
            .setFooter({ text: 'NTS Community Whitelist System©', iconURL: 'https://cdn.discordapp.com/attachments/1160114571994996736/1299739530814816297/tof-yt-profile.png' });

        const verify = new ButtonBuilder()
            .setCustomId('verify')
            .setLabel('Verify✔')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder()
			.addComponents(verify);

        await mentionedChannel.send({ embeds: [embed], components: [row] });

        await interaction.reply({ content: `Whitelist Embed sent to ${mentionedChannel}.`, ephemeral: true });
        
        setupChannels.add(mentionedChannel.id);
    },
};
