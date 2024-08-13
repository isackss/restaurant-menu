import { mainMenu } from "./mainMenu";

export const menuRestaurante = {
  desayunos: [
    {
      _id: "0001",
      category: "desayunos",
      title: "Pancakes Dorados",
      description: "Pancake con sirope y frutas frescas.",
      price: "7.00",
      img: "/assets/img/image1.jpeg",
    },
    {
      _id: "0002",
      category: "desayunos",
      title: "Tostadas Francesas",
      description: "Tostadas francesas con un toque de canela y vainilla.",
      price: "7.00",
      img: "/assets/img/image2.png",
    },
    {
      _id: "0003",
      category: "desayunos",
      title: "Desayuno Continental Europeo",
      description: "Selección de panes, quesos finos y carnes frías.",
      price: "7.00",
      img: "/assets/img/image3.jpeg",
    },
    {
      _id: "0004",
      category: "desayunos",
      title: "Desayuno Americano Clásico",
      description: "Huevos al gusto, tocino y papas doradas.",
      price: "10.00",
      img: "/assets/img/image4.jpeg",
    },
    {
      _id: "0005",
      category: "desayunos",
      title: "Frescura Matutina",
      description: "Plato de frutas de temporada.",
      price: "6.00",
      img: "/assets/img/image5.jpeg",
    },
    {
      _id: "0006",
      category: "desayunos",
      title: "Parfait",
      description: "Yogourt, granola y frutas.",
      price: "5.50",
      img: "/assets/img/image6.jpeg",
    },
  ],
  entradas: [
    {
      _id: "0007",
      category: "entradas",
      title: "Tiradito De Corvina",
      description:
        "Finas láminas de corvina marinada en citricos con toques de cilantro.",
      price: "9.00",
      img: "/assets/img/image7.png",
    },
    {
      _id: "0008",
      category: "entradas",
      title: "Ensalada Jardín De La Reina",
      description:
        "Variedad de vegetales frescos de temporada con vinagreta de la casa.",
      price: "8.00",
      img: "/assets/img/image8.png",
    },
    {
      _id: "0009",
      category: "entradas",
      title: "Capresse Al Oleo",
      description: "Tomate mozzarela fresca y albahaca.",
      price: "9.00",
      img: "/assets/img/image9.png",
    },
    {
      _id: "0010",
      category: "entradas",
      title: "Carne Ahumada",
      description:
        "Patacon relleno de carne ahumada con suaves toques de romero.",
      price: "8.00",
      img: "/assets/img/carneahu.jpg",
    },
    {
      _id: "0011",
      category: "entradas",
      title: "Trío De Hojaldre",
      description:
        "Combinación de vegetales, carne ahumada y pollo en masa panameña.",
      price: "10.00",
      img: "/assets/img/image10.png",
    },
  ],
  sopas: [
    {
      _id: "0012",
      category: "sopas",
      title: "Sancocho Tradicional Panameño",
      description: "Sazón panameña de pollo con tubérculos.",
      price: "7.00",
      img: "/assets/img/image11.png",
    },
    {
      _id: "0014",
      category: "sopas",
      title: "Crema De Zapallo Andino",
      description: "Sopa cremosa de zapallo con un toque de nuez moscada.",
      price: "7.00",
      img: "/assets/img/image12.png",
    },
  ],
  emparedados: [
    {
      _id: "0015",
      category: "emparedados",
      title: "Hamburquesa Gourmet",
      description:
        "Carne de res premium, queso cheddar, vegetales y aderezos selectos.",
      price: "11.00",
      img: "",
    },
    {
      _id: "0016",
      category: "emparedados",
      title: "Emparedado Verde",
      description: "Vegetales asados, queso búfala.",
      price: "10.00",
      img: "/assets/img/image13.png",
    },
    {
      _id: "0017",
      category: "emparedados",
      title: "Emparedado De Pollo",
      description: "Gama selecta de vegetales, pollo y mayonesa de aguacate.",
      price: "10.00",
      img: "/assets/img/image14.png",
    },
    {
      _id: "0018",
      category: "emparedados",
      title: "Emparedado De Res",
      description: "Carne selecta, vegetales de temporada y queso mozarella.",
      price: "12.00",
      img: "/assets/img/image15.png",
    },
    {
      _id: "0019",
      category: "emparedados",
      title: "Club Sandwich De Lujo",
      description: "Triple capa de sabores con pollo, tocino y huevo.",
      price: "11.00",
      img: "/assets/img/image16.jpeg",
    },
  ],
  pastas: [
    {
      _id: "0020",
      category: "pastas",
      title: "Pasta Maestro",
      description:
        "Elija entre fettuccine, spaguetti o penne. Salsas: pomodoro, alfredo, bechamel y oleo.",
      price: "8.00",
      img: "/assets/img/pastaconpollo.jpg",
      extras: [
        { title: "Pollo", price: "4.50" },
        { title: "Camarones", price: "4.50" },
        { title: "Salmón", price: "6.00" },
      ],
    },
  ],
  aves: [
    {
      _id: "0021",
      category: "aves",
      title: "Pollo Parmesano",
      description:
        "Pechuga de pollo empanizada con queso parmesano y salsa de tomate.",
      price: "13.00",
      img: "/assets/img/image17.png",
    },
    {
      _id: "0022",
      category: "aves",
      title: "Pollo Herb Garden",
      description:
        "Pechuga de pollo sazonada con finas hiervas, servida con ensalada.",
      price: "15.00",
      img: "/assets/img/image18.png",
    },
  ],
  carnes: [
    {
      _id: "0023",
      category: "carnes",
      title: "Filete De Res A La Parrilla",
      description:
        "Filete de res en salsa de pimienta, acompañado de puré de papas.",
      price: "15.50",
      img: "/assets/img/image19.png",
    },
    {
      _id: "0024",
      category: "carnes",
      title: "Baby Beech Al Chimichurry",
      description: "Filete a la brasa acompañado de un pimiento relleno.",
      price: "17.50",
      img: "/assets/img/image20.png",
    },
  ],
  mariscos: [
    {
      _id: "0025",
      category: "mariscos",
      title: "Corvina Verde Esmeralda",
      description: "Corvina en salsa de tomatillo verde, acompañada de arroz.",
      price: "17.50",
      img: "/assets/img/image21.png",
    },
    {
      _id: "0026",
      category: "mariscos",
      title: "Salmón Nórdico",
      description:
        "Salmón fresco bañado en salsa de maracuya, acompañado de vegetales.",
      price: "19.00",
      img: "/assets/img/image22.png",
    },
    {
      _id: "0027",
      category: "mariscos",
      title: "Camarones Tropical Dream",
      description: "Camarones delicadamente cocidos en un fumet de ajillo.",
      price: "13.00",
      img: "/assets/img/image23.png",
    },
    {
      _id: "0028",
      category: "mariscos",
      title: "Cazuela Marina De Marisco",
      description:
        "Selección de mariscos en caldo aromático de coco, toques de azafrán y finas hiervas.",
      price: "13.00",
      img: "/assets/img/image24.png",
    },
  ],
  acompanamientos: [
    {
      _id: "0029",
      category: "acompanamientos",
      title: "Papas Fritas",
      description: "",
      price: "3.00",
      img: "/assets/img/papas.jpeg",
    },
    {
      _id: "0030",
      category: "acompanamientos",
      title: "Arroz",
      description: "",
      price: "2.50",
      img: "/assets/img/arroz.jpeg",
    },
    {
      _id: "0031",
      category: "acompanamientos",
      title: "Vegetales",
      description: "",
      price: "2.50",
      img: "/assets/img/vegetales.jpeg",
    },
    {
      _id: "0032",
      category: "acompanamientos",
      title: "Ensalada",
      description: "",
      price: "2.50",
      img: "/assets/img/ensalada.jpeg",
    },
    {
      _id: "0033",
      category: "acompanamientos",
      title: "Patacones",
      description: "",
      price: "2.50",
      img: "/assets/img/patacones.jpeg",
    },
    {
      _id: "0034",
      category: "acompanamientos",
      title: "Puré",
      description: "",
      price: "2.50",
      img: "/assets/img/pure.jpeg",
    },
  ],
  postres: [
    {
      _id: "0035",
      category: "postres",
      title: "Volcán De Chocolate",
      description: "",
      price: "4.50",
      img: "/assets/img/volcan.jpg",
    },
    {
      _id: "0036",
      category: "postres",
      title: "Cheesecake De Frutos Rojos",
      description: "",
      price: "4.50",
      img: "/assets/img/cheesecake.jpg",
    },
    {
      _id: "0037",
      category: "postres",
      title: "Sable De Limón",
      description: "",
      price: "4.50",
      img: "/assets/img/sable.jpg",
    },
  ],
};

export const menuPiscina = {
  entradas: [
    {
      title: "Plato De Frutas",
      description: "Frutas de temporada.",
      price: "6.00",
      img: "/assets/img/image5.jpeg",
    },
    {
      title: "Tiradito De Corvina",
      description:
        "Finas láminas de corvina marinada en cítricos con toques de cilantro.",
      price: "9.00",
      img: "/assets/img/image7.png",
    },
    {
      title: "Deditos De Pollo",
      description: "Deditos de pollo acompañado de papas fritas.",
      price: "8.50",
      img: "/assets/img/image25.png",
    },
    {
      title: "Carne Ahumada",
      description:
        "Patacón relleno de carne ahumada con suaves toques de romero.",
      price: "8.00",
      img: "/assets/img/carneahu.jpg",
    },
  ],
  sopas: [
    {
      title: "Sancocho Tradicional Panameño",
      description: "Sazón panameña de pollo con tubérculos.",
      price: "7.00",
      img: "/assets/img/image11.png",
    },
    {
      title: "Crema De Zapallo Andino",
      description: "Sopa cremosa de zapallo con un toque de nuez moscada.",
      price: "7.00",
      img: "/assets/img/image12.png",
    },
  ],
  emparedados: [
    {
      title: "Club Sandwich De Lujo",
      description: "Triple capa de sabores con pollo, tocino y huevo.",
      price: "11.00",
      img: "/assets/img/image16.jpeg",
    },
    {
      title: "Derretido Tres Quesos",
      description: "Tres capas de sabor con tres tipos de quesos.",
      price: "5.50",
      img: "/assets/img/image26.jpeg",
    },
    {
      title: "Hamburquesa Gourmet",
      description:
        "Carne de res premium, queso cheddar, vegetales y aderezos selectos.",
      price: "11.00",
      img: "",
    },
  ],
  fuerte: [
    {
      title: "Alitas Búffalo",
      description: "6 unidades de alitas en salsa BBQ o búfalo.",
      price: "11.00",
      img: "/assets/img/image27.png",
    },
    {
      title: "Picada Mixta",
      description:
        "Picada de res, pollo y chorizo con patacones y papas fritas.",
      price: "16.00",
      img: "",
    },
    {
      title: "Filete De Res A La Parrilla",
      description: "Filete de res en salsa de pimienta, acompañado de puré.",
      price: "15.50",
      img: "/assets/img/image19.png",
    },
    {
      title: "Pollo Herb Garden",
      description:
        "Pechuga de pollo sazonada con finas hiervas, servida con ensalada.",
      price: "15.00",
      img: "/assets/img/image18.png",
    },
  ],
};

export const menuInfantil = {
  menu: [
    {
      title: "Deditos De Pollo",
      description: "Deditos de pollo acompañado de papas fritas.",
      price: "8.50",
      img: "/assets/img/image25.png",
    },
    {
      title: "Derretido Tres Quesos",
      description: "Tres capas de sabor con tres tipos de quesos.",
      price: "5.50",
      img: "/assets/img/image26.jpeg",
    },
    {
      title: "Hamburquesa Gourmet",
      description:
        "Carne de res premium, queso cheddar, vegetales y aderezos selectos.",
      price: "11.00",
      img: "",
    },
    {
      title: "Pasta Maestro",
      description:
        "Elija entre fettuccine, spaguetti, pomodo o penne. Salsas: pomodoro, alfredo, bechanel y oleo.",
      price: "8.00",
      img: "/assets/img/pastaconpollo.jpg",
      extras: [
        { title: "Pollo", price: "4.50" },
        { title: "Camarones", price: "4.50" },
        { title: "Salmón", price: "6.00" },
      ],
    },
    {
      title: "Pollo Parmesano",
      description:
        "Pechuga de pollo empanizada con queso parmesano y salsa de tomate.",
      price: "13.00",
      img: "/assets/img/image17.png",
    },
    {
      title: "Filete De Res A La Parrilla",
      description:
        "Filete de res en salsa de pimienta, acompañado de puré de papas.",
      price: "15.50",
      img: "/assets/img/image19.png",
    },
  ],
};

export const menuBebidas = {
  bebidasCalientes: [
    {
      title: "Café Americano",
      description: "",
      price: "2.50",
      img: "/assets/img/cafe-americano.jpeg",
    },
    {
      title: "Espresso Macchiato",
      description: "",
      price: "2.50",
      img: "/assets/img/espresso-macchiato.jpg",
    },
    {
      title: "Capuccino",
      description: "",
      price: "3.50",
      img: "/assets/img/cafe-capuccino.jpg",
    },
    {
      title: "Mocaccino",
      description: "",
      price: "3.50",
      img: "/assets/img/cafe-mocaccino.jpg",
    },
    {
      title: "Chocolate",
      description: "",
      price: "2.50",
      img: "/assets/img/hot-chocolate.jpg",
    },
    {
      title: "Té De Hiervas",
      description: "",
      price: "2.50",
      img: "/assets/img/te-hiervas.jpg",
    },
  ],
  bebidasfrias: [
    {
      title: "Agua Mineral",
      description: "",
      price: "2.00",
      img: "/assets/img/agua-mineral.jpg",
    },
    {
      title: "Sodas",
      description: "",
      price: "2.00",
      img: "/assets/img/sodas.jpg",
    },
    {
      title: "Jugo De Frutas de Temporada",
      description: "Piña, sandía, melón, papaya",
      price: "2.00",
      img: "/assets/img/jugo-frutas.jpg",
    },
    {
      title: "Red Lemonade",
      description: "Piña, sandía o limón",
      price: "2.50",
      img: "/assets/img/red-lemonade.jpg",
    },
    {
      title: "Detox",
      description: "Piña, naranja, apio y pepino",
      price: "2.50",
      img: "/assets/img/detox-juice.jpg",
    },
  ],
  tragos: [
    {
      title: "Whisky",
      description: "",
      price: "5.00",
      img: "/assets/img/whisky-shot.jpg",
    },
    {
      title: "Ron",
      description: "",
      price: "5.00",
      img: "/assets/img/ron-shot.jpg",
    },
    {
      title: "Vodka",
      description: "",
      price: "5.00",
      img: "/assets/img/vodka-shot.jpg",
    },
    {
      title: "Gin",
      description: "Piña, sandía o limón",
      price: "5.00",
      img: "/assets/img/gin-shot.jpg",
    },
    {
      title: "Tequila",
      description: "",
      price: "5.00",
      img: "/assets/img/tequila-shot.jpg",
    },
  ],
  cocteles: [
    {
      title: "Piña Colada",
      description: "",
      price: "6.50",
      img: "/assets/img/pinacolada.jpg",
    },
    {
      title: "Mojito",
      description: "",
      price: "6.50",
      img: "/assets/img/mojito.jpg",
    },
    {
      title: "Margarita",
      description: "",
      price: "6.50",
      img: "/assets/img/margarita.jpg",
    },
    {
      title: "Caipirinha",
      description: "",
      price: "6.50",
      img: "/assets/img/caipirinha.png",
    },
    {
      title: "Tom Collins",
      description: "",
      price: "6.50",
      img: "/assets/img/tomcollins.jpg",
    },
    {
      title: "Sangría",
      description: "",
      price: "6.50",
      img: "/assets/img/sangria.jpg",
    },
    {
      title: "Pisco Sour",
      description: "",
      price: "6.50",
      img: "/assets/img/piscosour.jpg",
    },
  ],
  cervezas: [
    {
      title: "Cerveza Nacional",
      description: "",
      price: "2.50",
      img: "/assets/img/nacionalesjpg.jpg",
    },
    {
      title: "Cerveza Internacional",
      description: "",
      price: "3.50",
      img: "/assets/img/importadas.jpg",
    },
  ],
};

export const navbarItems = [
  "Desayunos",
  "Entradas",
  "Sopas",
  "Emparedados",
  "Pastas",
  "Aves",
  "Carnes",
  "Pescados y Mariscos",
  "Acompañamientos",
];

export { mainMenu };
