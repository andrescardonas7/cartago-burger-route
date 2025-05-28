export interface NormalizedBurgerPlace {
  id: string
  name: string
  address?: string
  city?: string
  phone?: string
  category: string
  googleMapsLink?: string
  website?: string
  tags: string[]
  coordinates?: {
    x: number
    y: number
  }
}

export const burgerPlaces: NormalizedBurgerPlace[] = [
  {
    id: '1',
    name: 'ROCK BURGUER',
    address: 'CALLE 14 # 11-19',
    city: 'CARTAGO',
    phone: '+57 312 6733613',
    category: 'HAMBURGUESERÍA',
    website: 'http://www.instagram.com/rock.burger.cartago',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=ROCK%20BURGER&query_place_id=ChIJa6w9dE9vOI4RkMFU7kzMp9c',
    tags: ['gourmet', 'tradicional'],
    coordinates: { x: 150, y: 200 }
  },
  {
    id: '2',
    name: 'HARLEY WINGS',
    address: 'CALLE 13, 55 NORTE #1',
    city: 'CARTAGO',
    phone: '+57 318 4585787',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=HARLEY%20WINGS&query_place_id=ChIJ76sVjXTWOI4RdP2xB5OpBao',
    tags: ['alitas', 'delivery'],
    coordinates: { x: 250, y: 150 }
  },
  {
    id: '3',
    name: "MAXI BURGER'S",
    address: 'CL. 13 #1 NORTE-17',
    city: 'CARTAGO',
    phone: '+57 321 5994225',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=MAXI%20BURGUER&query_place_id=ChIJTvkJlXTWOI4R0T9PS6ZE_kY',
    tags: ['tradicional', 'delivery'],
    coordinates: { x: 280, y: 160 }
  },
  {
    id: '4',
    name: 'CRIARC COCINA',
    address: 'CRA. 11 NTE. #17-32',
    city: 'CARTAGO',
    category: 'HAMBURGUESERÍA',
    website: 'https://www.instagram.com/criarcocinarustica/?hl=es-la',
    googleMapsLink: 'https://maps.app.goo.gl/TxRvPZiFjGu8AuPp8',
    tags: ['gourmet', 'cocina rústica'],
    coordinates: { x: 200, y: 250 }
  },
  {
    id: '5',
    name: 'HAMBURGUESA PAISA',
    address: 'CRA. 9 NTE. #16B – 41',
    city: 'CARTAGO',
    phone: '+57 301 7490720',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=BURGER%20PAISA&query_place_id=ChIJ0bO37fXXOI4RmDKWQhyvcK4',
    tags: ['tradicional', 'paisa'],
    coordinates: { x: 180, y: 240 }
  },
  {
    id: '6',
    name: 'TIERRA QUERIDA',
    address: 'CL. 4 #3-86',
    city: 'CARTAGO',
    phone: '+57 323 3830700',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=TIERRA%20QUERIDA&query_place_id=ChIJO2n9tabXOI4RdCc9pYX_irw',
    tags: ['tradicional'],
    coordinates: { x: 220, y: 220 }
  },
  {
    id: '7',
    name: 'COMIDAS RÁPIDAS MEMO',
    address: 'CL. #18B15 #',
    city: 'CARTAGO',
    phone: '+57 322 6506669',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=COMIDAS%20R%C3%A1PIDAS%20MEMO&query_place_id=ChIJu6aSr_bVOI4RrIfZ-IxcuJQ',
    tags: ['tradicional', 'comida rápida'],
    coordinates: { x: 240, y: 300 }
  },
  {
    id: '8',
    name: 'BURGER BITES GOURMET',
    address: '9 NORTE - 21, CAL 17, PRADO NORTE',
    city: 'CARTAGO',
    phone: '+57 320 6809594',
    category: 'HAMBURGUESERÍA',
    website: 'https://biolink.info/burgerbites',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=BURGER%20BITES%20GOURMET&query_place_id=ChIJtRgS6dVXOI4RIbG2pw5f8nc',
    tags: ['gourmet', 'delivery'],
    coordinates: { x: 170, y: 250 }
  },
  {
    id: '9',
    name: 'URBAN BURGER CARTAGO',
    address: 'CL. 17 #9 NORTE-33',
    city: 'CARTAGO, PEREIRA',
    phone: '+57 317 8898763',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=URBAN%20BURGER%20CARTAGO&query_place_id=ChIJ75L2aGbXOI4RIrB3oNjX1Zk',
    tags: ['gourmet', 'moderno'],
    coordinates: { x: 160, y: 260 }
  },
  {
    id: '10',
    name: 'DÓNDE ALEJO BURGUER',
    address: 'CRA 5N # 16B-125',
    city: 'CARTAGO',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=D%C3%B3NDE%20ALEJO%20BURGUER&query_place_id=ChIJ5wGMWAbXOI4RsE5Cw9gPo68',
    tags: ['tradicional'],
    coordinates: { x: 140, y: 240 }
  },
  {
    id: '11',
    name: 'BURGER PAISA LOS 16',
    address: 'CARRERA 2A CON CALLE 16',
    city: 'CARTAGO',
    phone: '+57 300 3338296',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=BURGER%20PAISA%20LA%2016&query_place_id=ChIJqwdBxYpXOI4ReM7RoAuuuOE',
    tags: ['tradicional', 'paisa'],
    coordinates: { x: 320, y: 180 }
  },
  {
    id: '12',
    name: 'FÓRMULA KART CO',
    address: 'CRA. 1 NTE. #13-15',
    city: 'CARTAGO',
    phone: '+57 312 4159373',
    category: 'HAMBURGUESERÍA',
    website: 'https://www.instagram.com/formulakartco/',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=F%C3%B3RMULA%20KART%20CO&query_place_id=ChIJeYkRx4zXOI4RuUY_kYICeIs',
    tags: ['temático', 'gourmet'],
    coordinates: { x: 300, y: 150 }
  },
  {
    id: '13',
    name: 'BURGERS GRILL',
    address: 'CRA. 10 NTE. #17A-21',
    city: 'CARTAGO',
    phone: '+57 315 2414100',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=BURGERS%20GRILL&query_place_id=ChIJ82IMqSnXOI4RfCGzfgCCicw',
    tags: ['parrilla', 'gourmet'],
    coordinates: { x: 190, y: 260 }
  },
  {
    id: '14',
    name: 'CHANFLE',
    address: 'CRA. 13 NTE. #17-04',
    city: 'CARTAGO',
    phone: '+57 314 6652316',
    category: 'HAMBURGUESERÍA',
    website: 'https://wa.link/8qf0e3',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=CHANFLE&query_place_id=ChIJ__mDYL1XOI4R_VEAcEonIp0',
    tags: ['delivery', 'tradicional'],
    coordinates: { x: 220, y: 270 }
  },
  {
    id: '15',
    name: 'ARRIERO ANDARIEGO',
    address: 'PARQUE VILLA ELENA, CRA. 13 NTE. #CON 17',
    city: 'CARTAGO',
    phone: '+57 314 6616051',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=ARRIERO%20ANDARIEGO&query_place_id=ChIJ8VOLjrdWOI4RI9ZCaThw5Jo',
    tags: ['tradicional', 'parque'],
    coordinates: { x: 230, y: 280 }
  },
  {
    id: '16',
    name: 'TEXAS - HOUSE OF BURGERS',
    address: 'CRA. 1 NTE. #15 - 74',
    city: 'CARTAGO',
    phone: '+57 302 2394216',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=TEXAS%20CARTAGO&query_place_id=ChIJV1IXm4dXOI4RuM8G8ouAm-Q',
    tags: ['gourmet', 'americano'],
    coordinates: { x: 310, y: 180 }
  },
  {
    id: '17',
    name: 'COMIDAS RÁPIDAS EL GORDO #2',
    address: 'CL. 44 #1-158',
    city: 'CARTAGO',
    phone: '+57 317 2214709',
    category: 'COMIDA RAPIDA',
    website: 'https://biolink.info/elgordocomidas',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=COMIDAS%20R%C3%A1PIDAS%20EL%20GORDO%20%232&query_place_id=ChIJkzWdc-9XOI4R7Vpc-IgfBYw',
    tags: ['tradicional', 'comida rápida'],
    coordinates: { x: 350, y: 320 }
  },
  {
    id: '18',
    name: 'YAYOS',
    address: 'CALLE 14 CON CRA 1',
    city: 'CARTAGO',
    phone: '3162948685',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/2x7etUG7XDS2psVA9',
    tags: ['tradicional'],
    coordinates: { x: 280, y: 200 }
  },
  {
    id: '19',
    name: 'MARMOLEO',
    address: 'CARRERA 2 # 11-76',
    city: 'CARTAGO',
    phone: '3175738174',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/KMfZU5hzpkGyJs7WA',
    tags: ['gourmet'],
    coordinates: { x: 260, y: 210 }
  },
  {
    id: '20',
    name: 'CASA RAMAZZOTTI',
    address: 'CALLE 14 # 8-65',
    city: 'CARTAGO',
    phone: '312 771 1220',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/tYe6CAKoS4wKJ2Q58',
    tags: ['gourmet', 'italiano'],
    coordinates: { x: 200, y: 200 }
  },
  {
    id: '21',
    name: 'MAGNO',
    address: 'CALLE 13 # 1N-87',
    city: 'CARTAGO',
    phone: '304 646 8233',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/KMlSDUMdmVMflzDn6',
    tags: ['gourmet'],
    coordinates: { x: 290, y: 170 }
  },
  {
    id: '22',
    name: 'BURGER LOVE',
    address: 'AV DEL RÍO 16B-05',
    city: 'CARTAGO',
    phone: '318 378 3480',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/HqvfffSA8pvNsxnG7',
    tags: ['romántico', 'gourmet'],
    coordinates: { x: 130, y: 230 }
  },
  {
    id: '23',
    name: 'URBAN BURGER',
    address: 'CALLE 17 # 9N-33',
    city: 'CARTAGO',
    phone: '317 889 8763',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/f1B15h9QuuXi6rTH9',
    tags: ['gourmet', 'moderno'],
    coordinates: { x: 165, y: 265 }
  },
  {
    id: '24',
    name: 'EL RODEO',
    address: 'CALLE 18 NO. 9N-16',
    city: 'CARTAGO',
    phone: '315 060 8299',
    category: 'HAMBURGUESERÍA',
    tags: ['parrilla', 'tradicional'],
    coordinates: { x: 175, y: 275 }
  },
  {
    id: '25',
    name: 'PERSANO - LIFESTYLE',
    address: 'CRA 1 # 19-10',
    city: 'CARTAGO',
    phone: '321 322 7705',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/dW7uVYuPDbhAyLLf6',
    tags: ['gourmet', 'lifestyle'],
    coordinates: { x: 320, y: 190 }
  },
  {
    id: '26',
    name: 'VALHALLA FOOD',
    address: 'CRA 2 # 17-41',
    city: 'CARTAGO',
    phone: '312 692 2234',
    category: 'HAMBURGUESERÍA',
    googleMapsLink: 'https://maps.app.goo.gl/9SmEzxwhYEmKPayb8',
    tags: ['temático', 'vikingo'],
    coordinates: { x: 330, y: 200 }
  },
  {
    id: '27',
    name: 'ALFARERO BY ARTE/SANO',
    address: 'CALLE 12 BIS #3N-06',
    city: 'CARTAGO',
    phone: '300 832 6964',
    category: 'HAMBURGUESERÍA',
    website: 'https://linktr.ee/alfareroburger',
    googleMapsLink: 'https://maps.app.goo.gl/8XLavYfQ1gqfwDwK7',
    tags: ['artesanal', 'saludable'],
    coordinates: { x: 150, y: 170 }
  }
] 