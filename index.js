const discord = require('discord.js');
const client = new discord.Client;
//const token = "Mjc5OTIyMzQxNDc4MTM3ODU2.C4B5hA.16zG9SKeRGGfBX2YwFswmGm_hlk"; //token bot test
const prefix = "=";
var status = prefix + "aide";
const mention  = "test";


client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
  var servers = client.guilds.array().map(g => g.name).join(',');
  console.log("--------------------------------------");
  console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :smiley:  \n[!]');
  client.user.setGame(status); //Joue à ...
});

client.on("message", message => {
	if (message.content.startsWith(prefix + 'cc')){
		message.reply("coucou");
	}



	/*Rubrique Jeux *//*
	if (message.content.startsWith(prefix+ 'ygo')){
		var ygo = message.content.substr(4);
		React.renderComponent(
			<Yugioh name="dark magician" />,
			document.getElementById(console.log)
);
*/

})
var dt = process.env.DISCORD_TOKEN || process.argv[2];

if (!dt) {
    console.log('Mjc5OTIyMzQxNDc4MTM3ODU2.C4B5hA.16zG9SKeRGGfBX2YwFswmGm_hlk');
}

client.login(dt);
client.login(token)
