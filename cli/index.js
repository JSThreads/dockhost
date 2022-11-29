const gradient = require('gradient-string');

const { exec } = require("child_process");
const prompt = require('prompt-sync')();

console.log(gradient.pastel.multiline('________                 __     ___ ___                 __    _________ .____    .___ \n\\______ \\   ____   ____ |  | __/   |   \\  ____  _______/  |_  \\_   ___ \\|    |   |   |\n |    |  \\ /  _ \\_/ ___\\|  |/ /    ~    \\/  _ \\/  ___/\\   __\\ /    \\  \\/|    |   |   |\n |    `   (  <_> )  \\___|    <\\    Y    (  <_> )___ \\  |  |   \\     \\___|    |___|   |\n/_______  /\\____/ \\___  >__|_ \\\\___|_  / \\____/____  > |__|    \\______  /_______ \\___|\n        \\/            \\/     \\/      \\/            \\/                 \\/        \\/    \n'));

const commands = {
    exit: (args) => {
        process.exit(0)
    },
    start: (args) => {
        exec("docker-compose -f ./docker-compose.yml up -d");
    },
    stop: (args) => {
        exec("docker-compose -f ./docker-compose.yml down");
    },
    restart: (args) => {
        exec("docker-compose -f ./docker-compose.yml restart");
    },
    help: (args) => {
        console.log(gradient.pastel('\n╔═════════════════════════════════════════════╦══════════════════════════════════════╗\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')}                 Command 🚀                  ${gradient('#eb748a', '#eb748a')('║')}               Description 📘         ${gradient('#74ebd5', '#74ebd5')('║')}\n`,
gradient.pastel('\b╠═════════════════════════════════════════════╬══════════════════════════════════════╣\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')} exit                                        ${gradient('#eb748a', '#eb748a')('║')} Quit Dockhost CLI                    ${gradient('#74ebd5', '#74ebd5')('║')}\n`,
gradient.pastel('\b╠═════════════════════════════════════════════╬══════════════════════════════════════╣\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')} start                                       ${gradient('#eb748a', '#eb748a')('║')} Start Dockhost                       ${gradient('#74ebd5', '#74ebd5')('║')}\n`,  
gradient.pastel('\b╠═════════════════════════════════════════════╬══════════════════════════════════════╣\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')} restart                                     ${gradient('#eb748a', '#eb748a')('║')} Restart Dockhost                     ${gradient('#74ebd5', '#74ebd5')('║')}\n`,  
gradient.pastel('\b╠═════════════════════════════════════════════╬══════════════════════════════════════╣\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')} stop                                        ${gradient('#eb748a', '#eb748a')('║')} Stop Dockhost                        ${gradient('#74ebd5', '#74ebd5')('║')}\n`,  
gradient.pastel('\b╠═════════════════════════════════════════════╬══════════════════════════════════════╣\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')} add-service <config-file>                   ${gradient('#eb748a', '#eb748a')('║')} Add a server based on config file    ${gradient('#74ebd5', '#74ebd5')('║')}\n`, 
gradient.pastel('\b╠═════════════════════════════════════════════╬══════════════════════════════════════╣\n'),
`\b${gradient('#74ebd5', '#74ebd5')('║')} add-rule [dynamic|static] <rule, [<rules>]> ${gradient('#eb748a', '#eb748a')('║')} Add a rule to traefik proxy          ${gradient('#74ebd5', '#74ebd5')('║')}\n`,
gradient.pastel(`\b╚═════════════════════════════════════════════╩══════════════════════════════════════╝\n`))
    }
}

while (true) {
    console.log(gradient.vice('🐋 Ask Dockhost cli to...'))
    const command = prompt('');
    if (commands[command])
        commands[command](command.split(' '))
    else 
        console.log(gradient('red', 'red')(`Error: ${command.split(' ')[0]} command doesn't exits. Use help command to get help.`))
}
