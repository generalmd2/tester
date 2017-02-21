const discord = require('discord.js');
const client = new discord.Client;

const token = 'MjcxMzE0NTE0NDEzMDkyODY0.C42S3A.w3DL4z1wJV7ionIy_WgVOgzQE9s';
var prefix = '$';

const booru = require('booru');
const weather = require("weather-js");
const randomAnimeWallpapers = require('random-anime-wallpapers');
const Anime = require('malapi').Anime;
const translate = require('google-translate-api');
var http = require('http');
var https = require('https');
var google = require('google');
var status = "$aide/$help";
var hug = 1;


client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
  var servers = client.guilds.array().map(g => g.name).join(',');
  console.log("--------------------------------------");
  console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :smiley:  \n');
  client.user.setGame(status); //Joue à ...
});
client.on('guildMemberAdd', member => {
	member.guild.defaultChannel.sendMessage(`${member.user.username} a rejoins le serveur ${member.guild.name}`);
});

client.on('guildMemberRemove', member => {
	member.guild.defaultChannel.sendMessage(`${member.user.username} a quitté le serveur ${member.guild.name}`);
});
client.on("message", message =>{
	if (message.content.startsWith(prefix + 'aide')){
		message.channel.sendMessage('http://densetsuno.forumactif.org/h3-densetsuno-commande-fr');
	}
	if (message.content.startsWith(prefix + 'help')){
		message.channel.sendMessage('http://densetsuno.forumactif.org/h4-densetsuno-commande-en')
	}
})
client.on("message", message =>{
	//nsfw
	if (message.content.startsWith(prefix + 'r34')){
		let rule34Tags = message.content.slice(5).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("r34", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'e621')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("e6", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'e926')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("e9", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'hypo')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("hypo", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'dan')){
		let rule34Tags = message.content.slice(5).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("dan", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'kcom')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("kcom", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'knet')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("knet", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'yand')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("yand", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'gel')){
		let rule34Tags = message.content.slice(5).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("gel", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'safe')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("safe", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'tbib')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("tbib", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'xb')){
		let rule34Tags = message.content.slice(4).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("xb", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'yh')){
		let rule34Tags = message.content.slice(4).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("yh", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'doll')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("doll", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'pa')){
		let rule34Tags = message.content.slice(4).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("pa", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	if (message.content.startsWith(prefix + 'loli')){
		let rule34Tags = message.content.slice(6).split(" ");
            if (rule34Tags[0] === '') {
                message.reply("Veuillez mettre un tags pour la recherche");
                return;
            }

		booru.search("loli", rule34Tags, 2)
			.then(booru.commonfy)
				.then(images =>{
					for (let image of images){
						message.channel.sendMessage(`Score: ${image.common.score}\nImage: ${image.common.file_url}`);
					}
				})
				.catch(err => {
					if (err.name === 'booruError'){
						console.log(err.message);
						message.reply("Désolé, je n'ai pas trouvé d'image");
					}else {
						console.log(err)
					}
				})
	}
	else if (message.content.startsWith(prefix + 'ping')){
		message.reply("pong");
	}

})

client.on("message", message =>{
	//commande spécial
	if (message.content.startsWith(prefix + 'météo')){
   		var location = message.content.substr(6);
   		var unit = "C";
    
    	try {
        	weather.find({search: location, degreeType: unit}, function(err, data) {
            	if(err) {
                	console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                	message.reply("\n" + "Je ne peux pas trouvé d'information pour la méteo de " + location);
                	} else {
                	data = data[0];
               		console.log("**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
               		message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
              	}
       		 });
    	} catch(err) {
        	console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
        	message.reply("Une erreur est survenu, contacter l'administrateur ;) ");
        }
    }
    if (message.content.startsWith(prefix + 'img')){
		var keyword = message.content.substr(4);
		randomAnimeWallpapers(keyword)
        	.then(images => {
        	message.reply(images[0].full);
        	}
        )   
	}
	if (message.content.startsWith(prefix + 'en/fr')){
      var traduction = message.content.substr(6);
      translate(traduction, {to: 'fr'}).then(res => {
        message.channel.sendMessage(res.text);
      }).catch(err => {
         console.error(err);
      });
    }
    if (message.content.startsWith(prefix + 'fr/en')){
    	var traduction = message.content.substr(6);
    	      translate(traduction, {to: 'en'}).then(res => {
        message.channel.sendMessage(res.text);
      }).catch(err => {
         console.error(err);
      });
    }
    if (message.content.startsWith(prefix + 'g')){
		google.resultsPerPage = 1;
		var nextCounter = 0;
		google.lang = 'fr';
		google.tld = 'fr';
		var recherchegoogle = message.content.substr(2);
		google(recherchegoogle, function (err, res){
  			if (err) console.error(err)
  			for (var i = 0; i < res.links.length; ++i) {
    			var link = res.links[i];
    			message.channel.sendMessage(link.title + ' - ' + link.href+ "\n" + link.description + "\n");
  			}
  		})
	}
	if (message.content.startsWith(prefix + "radio")){
        const voiceConnection = message.member.voiceConnection;
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel){
        	message.reply("Vous n'êtes pas connecté sur un channel vocal");
      	}else{
        	message.reply("Connexion en cours ...");
        	voiceChannel.join()
        	.then(connection => {
				require('http').get('http://sv2.vestaradio.com/Radio-Animes', (res) => {
      			connection.playStream(res);
      			message.channel.sendMessage('Lecture radio : Radio Anime FR !');
        		})
        	.catch(console.error);
        	})
    	}
	}
	if (message.content.startsWith(prefix + 'leave')){
    	const voiceChannel = message.member.voiceChannel;
    	if(!voiceChannel){
       		message.reply("Erreur, vous ne pouvez pas leave le bot car vous ne l'avez pas connecté ou vous n'êtes pas connecté aux channel vocal");
      	}else{
        	message.reply("Déconnexion en cours ...");
        	message.member.voiceChannel.leave();
      	}
    }
    if (message.content.startsWith(prefix + "anime")){
    	var rec = message.content.toUpperCase().split(' ');
    	var lrec = message.content.split(' ');
    	rec.shift()
    	Anime.fromName(rec.join(' ')).then(anime => {
      		message.channel.sendMessage("**" + anime.title + ":**\n");
      			translate(anime.synopsis, {from: 'en', to: 'fr'}).then(res => {
        			message.channel.sendMessage(res.text);
        			message.channel.sendMessage('\n**Episodes : **' + anime.episodes);
          				translate(anime.status, {from: 'en', to: 'fr'}).then(res => {
            				message.channel.sendMessage(res.text);
            				message.channel.sendMessage('\n**Réalisée: **' + anime.aired + '\n**Type: **' + anime.type +
      													'\n**Note: **' + anime.statistics.score.value + "/10" + "\n**Genres: **" + anime.genres +
      													'\n**Plus D\'Info: **' + anime.detailsLink + '\n');
          				})
            			.catch(err => {
               				console.error(err);
             			});
     			 })
      			.catch(err => {
         			console.error(err);
      			});
      	})
    }
   /* if (message.content.startsWith(prefix + "hug")){
    	var message = message.content.substr(4);
    	/*var hugs1 = "http://img11.hostingpics.net/pics/574756680b69563aceba3df48b4483d007bce3.gif";
		var hugs2 = "http://img11.hostingpics.net/pics/812343animegifhugikihiyoriFavimcom2904678.gif";
		var hugs3 = "http://img11.hostingpics.net/pics/293075giphy.gif";
		var hugs4 = "http://img11.hostingpics.net/pics/822085HUGKOnKawaiiAMO.gif";
		var hugs5 = "http://img11.hostingpics.net/pics/313263tumblrn8pc8badUs1sg0ygjo1500.gif";*/
    	///if (hug === 1){
    		//message.reply("http://img11.hostingpics.net/pics/574756680b69563aceba3df48b4483d007bce3.gif");
    	////} else{
    	//	message.reply('erreur');
    	//}
    /*}*/
})

client.on("message", message =>{
	//commande normal
    if (message.content.startsWith(prefix + 'avatar')){
    	let avatarr = message.content.slice(8).split(" ");
            if (avatarr[0] === '') {
                message.reply(message.author.avatarURL);
                return;
            }
        //var autheur = message.content.substr(7);
        message.channel.sendMessage(message.mentions.users.first().avatarURL);
    }
	if (message.content.startsWith(prefix + 'id')){
		let avatarr = message.content.slice(8).split(" ");
            if (avatarr[0] === '') {
                message.reply('Error : Add : @name');
                return;
            }
		//var autheur = message.content.substr(3);
		var avataruser = message.mentions.users.first().avatarURL;
		var identifiant = message.mentions.users.first().id;
		var temps = message.mentions.users.first().createdAt;
		var mails = message.mentions.users.first().email;
		var verifier = message.mentions.users.first().verified;

		message.channel.sendMessage('Avatar : ' + avataruser);
		message.channel.sendMessage('Identifiant : ' + identifiant);
		message.channel.sendMessage('Inscrit depuis le : ' + temps);
		message.channel.sendMessage('E-mail : ' + mails);
		message.channel.sendMessage('Compte validé : ' + verifier);
		
	}
})
client.login(token)