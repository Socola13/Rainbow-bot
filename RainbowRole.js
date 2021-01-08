const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const size = config.colors;
const rainbow = new Array(size);

for (var i = 0; i < size; i++) {
    var red = sin_to_hex(i, 0 * Math.PI * 2 / 3); // 0   deg
    var blue = sin_to_hex(i, 1 * Math.PI * 2 / 3); // 120 deg
    var green = sin_to_hex(i, 2 * Math.PI * 2 / 3); // 240 deg

    rainbow[i] = '#' + red + green + blue;
}

function sin_to_hex(i, phase) {
    var sin = Math.sin(Math.PI / size * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);

    return hex.length === 1 ? '0' + hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
    for (let index = 0; index < servers.length; ++index) {
        let server = client.guilds.cache.get(servers[index]);
        if (!server) {
            if (config.logging) {
                console.log(`[ColorChanger] Servidor ${servers[index]} no se encontró.`);
            }
            continue;
        }

        let role = server.roles.cache.find(r => r.name === config.roleName);
        if (!role) {
            if (config.logging) {
                console.log(`[ColorChanger] El rol ${config.roleName} no fue encontrado en el servidor ${servers[index]}.`);
            }
            continue;
        }

        role.setColor(rainbow[place]).catch(console.error);

        if (config.logging) {
            console.log(`[ColorChanger] Cambió el color a ${rainbow[place]} en el servidor: ${servers[index]}`);
        }
    }

    if (place == (size - 1)) {
        place = 0;
    } else {
        place++;
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    if (config.speed < 60000) {
        console.log("La velocidad mínima es de 60.000, si se abusa de esto, tu bot podría tener una prohibición de IP.");
        process.exit(1);
    }
    setInterval(changeColor, config.speed);
    changeColor();
});


client.login(config.token);
