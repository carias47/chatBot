const data = {
  root: {
    type: "menu",
    messages: [
      {
        type: "text",
        data: "👋 Hola, ¡bienvenido a nuestra tienda de bebidas!",
      },
      {
        type: "text",
        data: "*¿Qué tipo de bebida estás buscando hoy?* 👇",
      },
    ],
    childrens: {
      a: {
        type: "submenu",
        title: "Cervezas",
        messages: [
          { type: "text", data: "*Elige la presentación que prefieres.*" },
        ],
        childrens: {
          a: {
            type: "data",
            title: "Canasta de Cervezas",
            messages: [
              {
                type: "text",
                data: "*Canasta de Cervezas*\n*Precio*: $25\n*Cantidad*: 12 botellas",
              },
            ],
          },
          b: {
            type: "data",
            title: "Sixpack",
            messages: [
              {
                type: "text",
                data: "*Sixpack*\n*Precio*: $10\n*Cantidad*: 6 latas",
              },
            ],
          },
          c: {
            type: "data",
            title: "Cerveza en Botella",
            messages: [
              {
                type: "text",
                data: "*Cerveza en Botella*\n*Precio*: $3\n*Volumen*: 750ml",
              },
            ],
          },
          d: {
            type: "data",
            title: "Cerveza en Lata",
            messages: [
              {
                type: "text",
                data: "*Cerveza en Lata*\n*Precio*: $2\n*Volumen*: 350ml",
              },
            ],
          },
        },
      },
      b: {
        type: "submenu",
        title: "Aguardiente",
        messages: [
          {
            type: "text",
            data: "*Elige la marca de tu preferencia.*",
          },
        ],
        childrens: {
          a: {
            type: "data",
            title: "Aguardiente Antioqueño",
            messages: [
              {
                type: "text",
                data: "*Aguardiente Antioqueño*\n*Precio*: $20\n*Volumen*: 750ml",
              },
            ],
          },
          b: {
            type: "data",
            title: "Aguardiente Blanco del Valle",
            messages: [
              {
                type: "text",
                data: "*Aguardiente Blanco del Valle*\n*Precio*: $18\n*Volumen*: 750ml",
              },
            ],
          },
        },
      },
      c: {
        type: "submenu",
        title: "Ron",
        messages: [
          {
            type: "text",
            data: "*Elige la marca de tu preferencia.*",
          },
        ],
        childrens: {
          a: {
            type: "data",
            title: "Ron Zacapa",
            messages: [
              {
                type: "text",
                data: "*Ron Zacapa*\n*Precio*: $50\n*Volumen*: 750ml",
              },
            ],
          },
          b: {
            type: "data",
            title: "Ron Barceló",
            messages: [
              {
                type: "text",
                data: "*Ron Barceló*\n*Precio*: $30\n*Volumen*: 750ml",
              },
            ],
          },
        },
      },
    },
  },
};

module.exports = data;
