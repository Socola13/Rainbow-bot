# Rainbow-bot
Consiguiendo un rol de arcoiris con un bot de la discordia **usando la discord.JS**

## Usar:
1. Instalar [**Discord.JS**](https://github.com/discordjs/discord.js)
2. Obtener este código
3. Cambiar config.js

## Config:
| Opción        | Uso |
| ------------- |---------------|
| token         | el token de tu bot de discord.
| servers       | Lista de sus id de servidor aquí ([¿cómo obtener mi id de servidor?](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-server-ID-))
| roleName      | El nombre del rol que te gustaría cambiar automáticamente su color.
| colors        | El número de colores que se usarán...
| speed         | La velocidad a la que tiene que cambiar (en ms).
| logging       | Si quieres registrarte cuando el color ha cambiado en la consola (puede ser muy desordenado)...

### Attention!
**Si estás usando una velocidad inferior a 60000ms (1 minuto) tu bot podría tener prohibida la IP!**

Para los permisos, el rol del bot debe ser más alto que el rol del que quieres cambiar su color en la configuración del servidor, así

[Admin]

[BotRole]

[RolDelQueQuieresCambiarElColor]

[@todos]
