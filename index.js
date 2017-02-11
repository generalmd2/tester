const discord = require('discord.js');
const client = new discord.Client;
const token = "MjcxMzE0NTE0NDEzMDkyODY0.C2fU9Q.P7FDWBLLOhl5WyoZZAoqknX3WZg";
const prefix = "=";
var status = prefix + "aide";
var streamingURL = "http://densetsuno.forumactif.org";
const Porno = require('porno');
const prn = new Porno();
const mention  = "test";
var Lolibooru = require("node-lolibooru");
var loli = new Lolibooru();

client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
  var servers = client.guilds.array().map(g => g.name).join(',');
  console.log("--------------------------------------");
  console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :smiley:  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
  client.user.setGame(status, streamingURL); //Joue à ...
});

client.on("message", message => {
	/* Rubrique NSFW */
	if (message.content.startsWith(prefix + 'porn')){
		var porc = message.content.substr(5);
		prn.searchVideo(porc).then(console.log);
	}
	if (message.content.startsWith(prefix + 'loli')){
		var lolli = message.content.substr(5);

		loli.getLoli(1,1, /*"1girl"*/lolli).then((data) => {
			console.log(data[0].preview_url);
			message.channel.sendMessage(data[0].preview_url);
		})
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

client.login(token)
