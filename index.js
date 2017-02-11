const discord = require('discord.js');
const client = new discord.Client;
const weather = require("weather-js");
const Anime = require('malapi').Anime;
const translate = require('google-translate-api');
const LeagueofLegends = require('leagueofLegends-api');
const lol = new LeagueofLegends('RGAPI-586ab7f1-3860-4d15-b32e-f43e98f8ee53', 'euw');
const randomAnimeWallpapers = require('random-anime-wallpapers');
const getter = require('booru-getter');
var https = require('https');
var http = require('http');
var google = require('google');
var prefix = "$";
var mention = "<@!255828814041448448>";
var mentionid = "<@!";
var status = prefix + "aide";


client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
  var servers = client.guilds.array().map(g => g.name).join(',');
  console.log("--------------------------------------");
  console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :smiley:  \n[!]');
  client.user.setGame(status); //Joue à ...
});

client.on('guildMemberAdd', member => {
	member.guild.defaultChannel.sendMessage(`${member.user.username} a rejoins le serveur ${member.guild.name}`);
});
client.on('guildMemberRemove', member => {
	member.guild.defaultChannel.sendMessage(`${member.user.username} a quitté le serveur ${member.guild.name}`);
});

client.on('error', m => console.log('debug', m));
client.on('reconnecting', m => console.log('debug', m));

client.on("message", message =>{
	if (message.content.startsWith(prefix + 'aide')){
		message.channel.sendMessage('**Bienvenu sur l\' aide du bot**' +
                                  '\n**' + prefix + 'avatar** : Affiche l\'avatar' +
                                  '\n**' + prefix + 'météo <Ville> <Pays>** : Affiche la météo de votre ville (si introuvable, ajouter pays' + 
                                  '\n**' + prefix + 'join** : Rejoint le vocal' + 
                                  '\n**' + prefix + 'leave** : Quitte le vocal (doit être en vocal)' + 
                                  '\n**' + prefix + 'radio <Nom Radio>** : Met la Radio sur le channel, radio disponible :' +
                                  '\n' +          '   - Fun Radio : 1' +
                                  '\n' +          '   - Radio Classique : 2 (en panne)' +
                                  '\n' +          '   - Radio Anime : 3' +
                                  '\n**' + prefix + 'anime <Nom>** : Donne les infos du mangas (FR bêta)' + 
                                  '\n**' + prefix + 'trad <phrase>** : Traduit de l\'Anglais au Français (FR bêta)' + 
                                  '\n**' + prefix + 'img <Tags>** : Affiche une images celon votre Tags (bêta)' +
                                  '\n**' + prefix + 'ping** : pong' + 
                                  '\n**' + prefix + 'id** : Affiche votre ID discord' + 
                                  '\n**' + prefix + 'g <Recherche>** : Rechercher google' +
                                  '\n' +
                                  '\n**Commande Jeu : **' +
                                  '\n**' + prefix + 'lolid <identifiant>** : Retrouver le pseudo par son id' +
                                  '\n**' + prefix + 'lolniv <pseudo>** : Donne son niveau' +
                                  '\n**Commande NSFW : **' +
                                  '\n**' + prefix + 'boru <Tags>** : Recherche Booru');
	}
})

client.on("message", message => {
	if (message.content.startsWith(prefix + 'ping')){
		message.reply("pong");
	}
	if (message.content.startsWith(prefix + 'img')){
		var keyword = message.content.substr(4);
		randomAnimeWallpapers(keyword)
        	.then(images => {
        	message.reply(images[0].full);
        	}
        )   
	}
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
    if (message.content.startsWith(prefix + 'join')){
    const voiceConnection = message.member.voiceConnection;
      const voiceChannel = message.member.voiceChannel;
      if (!voiceChannel){
        message.reply("Vous n'êtes pas connecté sur un channel vocal");
      }else{
        message.reply("Connexion en cours ...");
        voiceChannel.join()
        .then(connection => {
        message.delete();
              message.reply('Je suis connecté'); 
        })
          .catch(console.error);
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
    if (message.content.startsWith(prefix + 'trad')){
      var traduction = message.content.substr(5);
      translate(traduction, {from: 'en', to: 'fr'}).then(res => {
        message.channel.sendMessage(res.text);
      }).catch(err => {
         console.error(err);
      });
    }
    if (message.content.startsWith(prefix + 'lolid')){
        var invocateur = message.content.substr(6);
          lol.findSummonerById(invocateur).then((result) =>{ 
            let key = Object.keys(result)[0];
            message.channel.sendMessage("Nom de l'invocateur : " + result[key].name);
          });
    }
    if (message.content.startsWith(prefix + 'lolniv')){
      var invocateur = message.content.substr(7);
          lol.findSummoner(invocateur).then((result) =>{ 
            let key = Object.keys(result)[0];
            message.channel.sendMessage(invocateur + " lvl : " + result[key].summonerLevel);
          });
    }
    if (message.content.startsWith(prefix + 'radio 1')){
    message.member.voiceChannel.join()
    .then(connection => {
      require('http').get('http://streaming.radio.funradio.fr/fun-1-44-96', (res) => {
      connection.playStream(res);
      message.channel.sendMessage('Lecture radio : Fun Radio sélectionné !');
      })
    })
    }
    if (message.content.startsWith(prefix + 'radio 2')){
    message.member.voiceChannel.join()
    .then(connection =>{
      require('http').get('http://broadcast.infomaniak.ch/radioclassique-high.aac', (res) => {
        connection.playStream(res);
        message.channel.sendMessage('Lecture radio : Radio Classique séléctionné !');
      })
    })
    }
    if (message.content.startsWith(prefix + 'radio 3')){
    message.member.voiceChannel.join()
    	.then(connection =>{
      	   require('http').get('http://sv2.vestaradio.com/Radio-Animes', (res) => {
        	connection.playStream(res);
        	message.channel.sendMessage('Lecture radio : Radio Anime séléctionné !');
      	})
    	})
    }
    if (message.content.startsWith(prefix + 'avatar')){
      	message.reply(message.author.avatarURL);
    }
    google.resultsPerPage = 1;
	var nextCounter = 0;
	google.lang = 'fr'
	google.tld = 'fr'

	if (message.content.startsWith('$g')){
		var recherchegoogle = message.content.substr(2);
		google(recherchegoogle, function (err, res){
  			if (err) console.error(err)
 
  			for (var i = 0; i < res.links.length; ++i) {
    		var link = res.links[i];
    		message.channel.sendMessage(link.title + ' - ' + link.href+ "\n" + link.description + "\n");

  	}
  	if (message.content.startsWith('$boru')){
		var gelborry = message.content.substr(5);
		getter.getRandomLewd(gelborry, (url)=>{
   			 //do something with URL here
   			// console.log(url);
   			 message.channel.sendMessage("http:"+url);
		})
	}

})
var dt = process.env.DISCORD_TOKEN || process.argv[2];

if (!dt) {
    console.log('MjcxMzE0NTE0NDEzMDkyODY0.C4CnDg.3IjpOdIjSYAiM9Q6_Th-eZXuS_A');
}

client.login(dt);

