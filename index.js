const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client();

const data = require("./data"); // Importamos la estructura de menú

let userMenuContext = {};

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente está listo!");
});

client.on("message", async (message) => {
  if (message.body.toLowerCase() === "menu") {
    userMenuContext[message.from] = "root";
    sendMenuOptions(message.from, data.root);
  } else if (message.body.toLowerCase() === "retroceder") {
    const paths = userMenuContext[message.from].split(".");
    if (paths.length > 1) {
      paths.pop();
      paths.pop();
      userMenuContext[message.from] = paths.join(".");
      const context = getNestedObject(data, paths);
      sendMenuOptions(message.from, context);
    } else {
      sendMenuOptions(message.from, data.root);
    }
  } else if (userMenuContext[message.from]) {
    const context = getNestedObject(
      data,
      userMenuContext[message.from].split(".")
    );
    if (context && context.childrens && context.childrens[message.body]) {
      userMenuContext[message.from] += "." + message.body + ".childrens";
      sendMenuOptions(message.from, context.childrens[message.body]);
    } else {
      message.reply(
        "Opción no válida. Por favor, elige una de las opciones del menú o escribe 'retroceder' para volver."
      );
    }
  } else {
    // Otras respuestas o comandos del bot fuera del sistema de menús
    if (message.body === "!ping") {
      message.reply("pong");
    } else if (esSaludo(message.body)) {
      message.reply(
        "¡Hola! ¿En qué puedo ayudarte? Escribe 'menu' para ver las opciones."
      );
    }
  }
});

function sendMenuOptions(user, menu) {
  menu.messages.forEach((msg) => {
    if (msg.type === "text") {
      client.sendMessage(user, msg.data);
    }
  });

  let options = "";
  for (let key in menu.childrens) {
    options += `${key}. ${menu.childrens[key].title}\n`;
  }
  options += "Escribe 'retroceder' para volver al menú anterior.";
  client.sendMessage(user, options);
}

function getNestedObject(nestedObj, pathArr) {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
}

function esSaludo(mensaje) {
  const saludos = [
    "hola",
    "holi",
    "hey",
    "buenas",
    "buenos dias",
    "buenas tardes",
    "buenas noches",
    "saludos",
    "qué tal",
  ];
  return saludos.some((saludo) => mensaje.toLowerCase().includes(saludo));
}

client.initialize();
