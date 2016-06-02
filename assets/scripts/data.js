var freshman_list = [
  {/*will be treated like outsider of Sao Paulo*/
    name: "Maria",
    email: "maria@mail.com",
    social_network: [
      "facebook.com/maria",
      "instagram.com/maria"
    ],
    campus: "FCT",
    course: "CC"
  },
  {/*will be treated like outsider of prudente*/
    name: "Jorge",
    email: "jorge@mail.com",
    social_network: [
      "facebook.com/jorge",
      "instagram.com/jorge"
    ],
    campus: "FCT",
    course: "CC"
  },
  {/* will be treated like outsider of campus*/
    name: "José",
    email: "jose@josemail.com",
    social_network: [
      "facebook.com/jose",
      "instagram.com/jose"
    ],
    campus: "FIPP",
    course: "CC"
  },
  {
    name: "Camila",
    email: "camila@mail.com",
    social_network: [
      "facebook.com/camila",
      "instagram.com/camila"
    ],
    campus: "FCT",
    course: "CC"
  }
]

var veteran_list = [
  {
    name: "Gustavo",
    email: "gustavo@mail.com",
    social_network: [
      "facebook.com/gustavo",
      "instagram.com/gustavo"
    ],
    campus: "FCT",
    course: "Geo"
  },
  {
    name: "Gabriel",
    email: "gabriel@mail.com",
    social_network: [
      "facebook.com/gabriel",
      "instagram.com/gabriel"
    ],
    campus: "FCT",
    course: "CC"
  },
  {
    name: "Giovana",
    email: "giovana@mail.com",
    social_network: [
      "facebook.com/giovana",
      "instagram.com/giovana"
    ],
    campus: "FCT",
    course: "CC"
  },
  {
    name: "Renata",
    email: "renata@mail.com",
    social_network: [
      "facebook.com/renata",
      "instagram.com/renata"
    ],
    campus: "FCT",
    course: "CC"
  }
]

function veteran_from_state()
{
  return veteran_list;
};
function veteran_from_city()
{
  return veteran_list;
};
function veteran_from_university()
{
  return veteran_list;
};
function veteran_from_campus()
{
  return veteran_list;
};
function veteran_from_course()
{
  var veteran_list_aux = veteran_list.slice();
  veteran_list_aux.splice(1,1);
  return veteran_list_aux;
};

function freshman_from_state()
{
  var freshman_list_aux = freshman_list.slice();
  freshman_list_aux.splice(1,1);
  return freshman_list_aux;
};

function freshman_from_city()
{
  var freshman_list_aux = freshman_list.slice();
  freshman_list_aux.splice(1,2);
  return freshman_list_aux;
};

function freshman_from_university()
{
  var freshman_list_aux = freshman_list.slice();
  freshman_list_aux.splice(1,3);
  return freshman_list_aux;
};

function freshman_from_campus()
{
  var freshman_list_aux = freshman_list.slice();
  freshman_list_aux.splice(1,4);
  return freshman_list_aux;
};
function freshman_from_course()
{
  return [];
};
function cleanVeterans()
{
  var list = document.getElementById("veteran_list");
  while (list.hasChildNodes())
  {
    list.removeChild(list.lastChild);
  }
}
function cleanFreshmans()
{
  var list = document.getElementById("freshman_list");
  while (list.hasChildNodes())
  {
    list.removeChild(list.lastChild);
  }
}

function cleanRepublics()
{
  var list = document.getElementById("republic_list");
  while (list.hasChildNodes())
  {
    list.removeChild(list.lastChild);
  }
}

function populateVeterans(items)
{
  var list = document.getElementById("veteran_list");
  cleanVeterans();

  var elements = "";
  for(var i = 0; i < items.length; i++)
  {
    var element = '<form class="form_input panel-group">' +
    '<input type="hidden" name="which_form" value="affiliate">' +
    '<input type="hidden" name="" value="">' +
    '<input type="hidden" name="" value="">' +
    '<div class="input-group">' +
    '<div class="input-group-btn">' +
    '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-user"></span></button>' +

    '</div>' +
    '<input type="text" class="form-control"  value="' + items[i].name + '"readonly>' +
    '<div class="input-group-btn">' +
    '<button class="btn btn-primary" type="button">Afiliar-se</button>' +
    '<button class="btn btn-danger cancel" type="button">Cancelar</button>' +
    '</div>' +
    '</div>' +
    '</form>';



    elements += element;
  }
  list.innerHTML = list.innerHTML + elements;
};

function populateFreshmans(items)
{
  var list = document.getElementById("freshman_list");
  cleanFreshmans();

  var elements = "";
  for(var i = 0; i < items.length; i++)
  {
    var element = '<form class="form_input panel-group">' +
    '<input type="hidden" name="which_form" value="affiliate">' +
    '<input type="hidden" name="" value="">' +
    '<input type="hidden" name="" value="">' +
    '<div class="input-group">' +
    '<div class="input-group-btn">' +
    '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-user"></span></button>' +
    '</div>' +
    '<input type="text" class="form-control"  value="' + items[i].name + '"readonly>' +
    '<div class="input-group-btn">' +
    '<button class="btn btn-primary afiliate" type="button">Afiliar-se</button>' +
    '<button class="btn btn-danger cancel" type="button">Cancelar</button>' +
    '</div>' +
    '</div>' +
    '</form>';

    elements += element;
  }
  list.innerHTML = list.innerHTML + elements;
};

function populateFilters(list,selectId)
{
  var selectList = document.getElementById(selectId);
  for(var i = selectList.length - 1; i >= 0; i--)
  {
    selectList.remove(i);
  }

  //Create and append the options
  for(var i = 0; i < list.length; i++)
  {
    var option = document.createElement("option");
    option.value = list[i].name;
    option.text = list[i].name;
    selectList.appendChild(option);
  }
}

function populateRepublics()
{
  var list = document.getElementById("republic_list");
  // cleanRepublics();

  var elements = "";

  // FOR TEST
  for(var i = 0; i < 5; i++)
  {
    var element =
    '<div class="panel-group" id="'+i+'">'+
    '<div class="panel panel-default">'+
    '<div class="panel-heading">'+
    '<div class="panel-title">'+
    '<div class="">'+
    '<div class="title">'+
    '<strong>"Nome da República" - Masculino  </strong><span class="badge">4/7 membros</span>'+
    '</div>'+
    '<a class="detail" data-toggle="collapse" href="#collapse'+i+'">Mais detalhes</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div id="collapse'+i+'" class="panel-collapse collapse">'+
    '<div class="panel-body">'+
    '<p><b>Integrante:</b> Jovem 2 <b>FCT</b></p>'+
    '<p><b>Integrante:</b> Jovem 2 <b>FCT</b></p>'+
    '<p><b>Integrante:</b> Jovem 2 <b>FCT</b></p>'+
    '<p><b>Integrante:</b> Jovem 2 <b>FCT</b></p>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';

    elements += element;
  }
  list.innerHTML = list.innerHTML + elements;
}

$(document).ready(function()
{
  populateVeterans(veteran_list);
  populateFreshmans(freshman_list);
  populateFilters([{name:"-"},{name:"São Paulo"},{name:"Rio de Janeiro"}],"estado");

  populateVeterans(veteran_from_state());
  populateFreshmans(freshman_from_state());

  // NEED TO CREATE THE JSON OF THE REPUBLICS AND PASS AS PARAMETER IN THE BELOW INVOCATION.
  populateRepublics(/**/);
});

function getDataState(title)
{
  if( title == "-" )
  {
    populateFilters([{name:"-"}],"cidade");
    populateFilters([{name:"-"}],"universidade");
    populateFilters([{name:"-"}],"campus");
    populateFilters([{name:"-"}],"curso");

    cleanFreshmans();
    cleanVeterans();
  }
  else if( title == "São Paulo" )
  {
    populateFilters([{name:"Presidente Prudente"},{name:"São José do Rio Preto"}],"cidade");
    populateFilters([{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"FCT"}],"campus");
    populateFilters([{name:"CC"},{name:"Geo"}],"curso");

    populateVeterans(veteran_from_course());
    populateFreshmans(freshman_from_course());
  }
  else
  {
    populateFilters([{name:"Rio de Janeiro"}],"cidade");
    populateFilters([{name:"UFRJ"}],"universidade");
    populateFilters([{name:"-"}],"campus");
    populateFilters([{name:"-"}],"curso");

    cleanFreshmans();
    cleanVeterans();
  }
}

function getDataCity(title)
{
  if( title == "Presidente Prudente" )
  {
    populateFilters([{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"FCT"}],"campus");
    populateFilters([{name:"CC"},{name:"Geo"}],"curso");

    populateVeterans(veteran_from_course());
    populateFreshmans(freshman_from_course());
  }
  else
  {
    populateFilters([{name:"-"}],"universidade");
    populateFilters([{name:"-"}],"campus");

    cleanFreshmans();
    cleanVeterans();
  }
}

function getDataUnivesity(title)
{
  if( title == "UNESP" )
  {
    populateFilters([{name:"FCT"}],"campus");
    populateFilters([{name:"CC"},{name:"Geo"}],"curso");

    populateVeterans(veteran_from_course());
    populateFreshmans(freshman_from_course());
  }
  else
  {
    populateFilters([{name:"FIPP"}],"campus");
    populateFilters([{name:"-"}],"curso");

    cleanFreshmans();
    cleanVeterans();
  }
}

function getDataCampus(title)
{
  if( title == "FCT" )
  {
    populateFilters([{name:"CC"},{name:"Geo"}],"curso");

    populateVeterans(veteran_from_course());
    populateFreshmans(freshman_from_course());
  }
  else
  {
    populateFilters([{name:"-"}],"curso");

    cleanFreshmans();
    cleanVeterans();
  }
}

function getDataCourse(title)
{
  if( title == "CC" )
  {
    populateVeterans(veteran_from_course());
    populateFreshmans(freshman_from_course());
  }
  else
  {
    cleanFreshmans();
    cleanVeterans();
  }
}
var rep_list = [
  {
    name: "Rep1",
    id: 0,
    vacancy: 2,
    gender: "f",
    owner:{
      name: "Renata",
      email: "renata@mail.com",
      social_network: [
        "facebook.com/renata",
        "instagram.com/renata"
      ],
      campus: "FCT",
      course: "CC"
    },
    members: [
      "Camila",
      "Eliana",
    ],
    address: ["rua1", -22.133689, -51.410490]
  },
  {
    name: "Rep2",
    id: 1,
    vacancy: 2,
    gender: "f",
    owner:{
      name: "Giovana",
      email: "giovana@mail.com",
      social_network: [
        "facebook.com/giovana",
        "instagram.com/giovana"
      ],
      campus: "FCT",
      course: "CC"
    },
    members: [
      "Camila",
      "Eliana",
    ],
    address: ["rua2", -22.132188, -51.405523]
  },
  {
    name: "Rep3",
    id: 2,
    vacancy: 2,
    gender: "m",
    owner:{
      name: "Gabriel",
      email: "gabriel@mail.com",
      social_network: [
        "facebook.com/gabriel",
        "instagram.com/gabriel"
      ],
      campus: "FCT",
      course: "CC"
    },
    members: [
      "Jorge",
      "Emilio",
    ],
    address: ["rua3", -22.121093, -51.412311]
  },
  {
    name: "Rep4",
    id: 3,
    vacancy: 4,
    gender: "m",
    owner:{
      name: "Jose",
      email: "jose@mail.com",
      social_network: [
        "facebook.com/gabriel",
        "instagram.com/gabriel"
      ],
      campus: "FCT",
      course: "CC"
    },
    members: [
      "Jorge",
      "Emilio",
    ],
    address: ["rua4",-22.123717, -51.413888]
  }
]


var locations = [
  ["rua1", -22.133689, -51.410490, 1],
  ["rua2", -22.132188, -51.405523, 2],
  ["rua3", -22.121093, -51.412311, 3],
  ["rua4",-22.123717, -51.413888, 4]
];
var marker_list = [];
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14,
  center: new google.maps.LatLng(-22.125519, -51.404074),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++){
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });
  marker_list.push(marker);

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

function hide_all()
{
  for (var i = 0; i < marker_list.length; i++) {
    marker_list[i].setMap(null);
  }
}
function show_all()
{
  for (var i = 0; i < marker_list.length; i++) {
    marker_list[i].setMap(map);
  }
}
function show_female(){
  //show_all();
  marker_list[0].setMap(map);
  marker_list[1].setMap(map);
}
function hide_female(){
  //show_all();
  marker_list[0].setMap(null);
  marker_list[1].setMap(null);
}
function show_male(){
  //show_all();
  marker_list[2].setMap(map);
  marker_list[3].setMap(map);
}
function hide_male(){
  //show_all();
  marker_list[2].setMap(null);
  marker_list[3].setMap(null);
}
function hide_less_than4()
{
  //show_all();
  marker_list[0].setMap(null);
  marker_list[1].setMap(null);
  marker_list[2].setMap(null);
}

$("#ckb_female").change(function() {
  if(this.checked) {
    show_female();
  }
  else{
    hide_female();
  }
});
$("#ckb_male").change(function() {
  if(this.checked) {
    show_male();
  }
  else{
    hide_male();
  }
});
$("#nmb_vacancy").change(function() {
  if (this.value>2 && this.value <=4){
    marker_list[0].setMap(null);
    marker_list[1].setMap(null);
    marker_list[2].setMap(null);
    marker_list[3].setMap(map);
  }
  else if (this.value>4){
    marker_list[3].setMap(null);
    marker_list[0].setMap(null);
    marker_list[1].setMap(null);
    marker_list[2].setMap(null);
  }
  else{
    marker_list[0].setMap(map);
    marker_list[1].setMap(map);
    marker_list[2].setMap(map);
    marker_list[3].setMap(map);
  }

});

function search_veteran(str_search){
  var result_list = []
  var items = veteran_list;
  for(var i = 0; i < items.length; i++)
  {
    if (items[i].name.indexOf(str_search) >= 0){
      result_list.push(items[i]);
    }
  }
  return result_list;
};


function search_freshman(str_search){
  var result_list = []
  var items = freshman_list;
  for(var i = 0; i < items.length; i++)
  {
    if (items[i].name.indexOf(str_search) >= 0){
      result_list.push(items[i]);
    }
  }
  return result_list;
};


function search_rep(str_search){
  var result_list = []
  var items = rep_list;
  for(var i = 0; i < items.length; i++)
  {
    if (items[i].name.indexOf(str_search) >= 0){
      result_list.push(items[i]);
    }
  }
  return result_list;
};


function general_search(str_search){
  vet_filtered_list = search_veteran(str_search);
  fresh_filtered_list = search_freshman(str_search);
  rep_filtered_list = search_rep(str_search);
  populateVeterans(vet_filtered_list);
  populateFreshmans(fresh_filtered_list);
  hide_all();
  for (var i=0; i< rep_filtered_list.length; i++){
    marker_list[rep_filtered_list[i].id].setMap(map);
  }
};


$("#ipt_search").keyup(function() {
  general_search(this.value);
});
