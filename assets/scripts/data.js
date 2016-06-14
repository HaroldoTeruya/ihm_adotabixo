//##################VARS####################
var freshman_list = [
  {/*will be treated like outsider of Sao Paulo*/
	id: 0,
    name: "Maria",
    email: "maria@mail.com",
    social_network: [
      "facebook.com/maria",
      "instagram.com/maria"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {/*will be treated like outsider of prudente*/
	id: 1,
    name: "Jorge",
    email: "jorge@mail.com",
    social_network: [
      "facebook.com/jorge",
      "instagram.com/jorge"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {/* will be treated like outsider of campus*/
	id: 2,
    name: "José",
    email: "jose@josemail.com",
    social_network: [
      "facebook.com/jose",
      "instagram.com/jose"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNOESTE",
    campus: "FIPP",
    course: "Ciência da Computação"
  },
  {
	id: 3,
    name: "Camila",
    email: "camila@mail.com",
    social_network: [
      "facebook.com/camila",
      "instagram.com/camila"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação",
  },
  {
	id: 4,
    name: "Letícia",
    email: "le@mail.com",
    social_network: [
      "facebook.com/le",
      "instagram.com/le"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Geografia",
  }
]

var veteran_list = [
  {
	id: 0,
    name: "Gustavo",
    email: "gustavo@mail.com",
    social_network: [
      "facebook.com/gustavo",
      "instagram.com/gustavo"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Geografia"
  },
  {
	id: 1,
    name: "Gabriel",
    email: "gabriel@mail.com",
    social_network: [
      "facebook.com/gabriel",
      "instagram.com/gabriel"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {
	id: 2,
    name: "Giovana",
    email: "giovana@mail.com",
    social_network: [
      "facebook.com/giovana",
      "instagram.com/giovana"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {
	id: 3,
    name: "Renata",
    email: "renata@mail.com",
    social_network: [
      "facebook.com/renata",
      "instagram.com/renata"
    ],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Geografia"
  }
]


//################# REP LIST
var rep_list = [
  {
    name: "Devassas",
    id: 0,
    vacancy: 0,
    gender: "f",
    phone: "(18) 987678980",
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação",
    owner: veteran_list[2],
    members: [
      freshman_list[0],
      freshman_list[3]
    ],
    address: {
      street: "R. Osvaldo Nobre Bandeira, 79 - Jardim Aquinopolis",
      city_state: "Pres. Prudente - SP",
      location: {
        lat: -22.133689,
        lng: -51.410490
      }
    }
  },
  {
    name: "Colmeia",
    id: 1,
    vacancy: 2,
    gender: "f",
    phone: "(18) 987632980",
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Geografia",
    owner: veteran_list[3],
    members: [],
    address: {
      street: "R. Caetés, 1 - Jardim Caiçara",
      city_state: "Pres. Prudente - SP",
      location: {
        lat: -22.132188,
        lng: -51.405523
      }
    }
  },
  {
    name: "GeograRep",
    id: 2,
    vacancy: 1,
    gender: "m",
    phone: "(18) 981238980",
    owner: veteran_list[0],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Geografia",
    members: [
      freshman_list[1],
    ],
    address: {
      street: "R. Abdala Buchala, 116 - Jardim",
      city_state: "Pres. Prudente - SP",
      location: {
        lat: -22.121093,
        lng: -51.412311
      }
    }
  },
  {
    name: "República da Computa",
    id: 3,
    vacancy: 4,
    gender: "m",
    phone: "(18) 987600170",
    owner: veteran_list[1],
    state: "São Paulo",
    city: "Presidente Prudente",
    university: "UNESP",
    campus: "FCT",
    course: "Ciência da Computação",
    members: [
      freshman_list[2]
    ],
    address: {
      street: "R. Artur Whitaker, 174 - Jardim Campo Belo",
      city_state: "Pres. Prudente - SP",
      location: {
        lat: -22.123717,
        lng: -51.413888
      }
    }
  }
]

var current_rep_list = rep_list;	

var current_freshman_list = freshman_list;

var current_veteran_list = veteran_list;

//# marker list for google map
var marker_list = [];

// # info window list
var info_list = [];

// # map var
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14,
  center: new google.maps.LatLng(-22.125519, -51.404074),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var no_data = [{name:"Não possui dados"}];

