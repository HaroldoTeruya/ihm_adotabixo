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
    course: "GEO"
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
function veteran_cc()
{
  var veteran_list_aux = veteran_list.slice();
  veteran_list_aux.splice(0,1);
  return veteran_list_aux;
}
function veteran_geo()
{
  var veteran_list_aux = veteran_list.slice();
  return veteran_list_aux.splice(0,1);
}
function freshman_fct()
{
  var freshman_list_aux = freshman_list.slice();
  freshman_list_aux.splice(2,1);
  return freshman_list_aux;
}
function freshman_fipp()
{
  var freshman_list_aux = freshman_list.slice();
  return freshman_list_aux.splice(2,1);
}
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
  // cleanVeterans();

  var elements = "";
  for(var i = 0; i < items.length; i++)
  {
    // var element = '<form class="form_input panel-group">' +
    // '<input type="hidden" name="which_form" value="affiliate">' +
    // '<input type="hidden" name="" value="">' +
    // '<input type="hidden" name="" value="">' +
    // '<div class="input-group">' +
    // '<div class="input-group-btn">' +
    // '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-user"></span></button>' +
    //
    // '</div>' +
    // '<input type="text" class="form-control"  value="' + items[i].name + '"readonly>' +
    // '<div class="input-group-btn">' +
    // '<button data-toggle="modal" data-target="#confirm-relationship-modal" class="btn btn-primary afiliate" type="button">Afiliar-se</button>' +
    // '<button data-toggle="modal" data-target="#confirm-relationship-modal" class="btn btn-danger cancel" type="button">Cancelar</button>' +
    // '</div>' +
    // '</div>' +
    // '</form>';
    //
    // elements += element;
  }
  list.innerHTML = list.innerHTML + elements;
};
function populateFreshmans(items)
{
  var list = document.getElementById("freshman_list");
  // cleanFreshmans();

  var elements = "";
  for(var i = 0; i < items.length; i++)
  {
    // var element = '<form class="form_input panel-group">' +
    // '<input type="hidden" name="which_form" value="affiliate">' +
    // '<input type="hidden" name="" value="">' +
    // '<input type="hidden" name="" value="">' +
    // '<div class="input-group">' +
    // '<div class="input-group-btn">' +
    // '<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-user"></span></button>' +
    // '</div>' +
    // '<input type="text" class="form-control"  value="' + items[i].name + '"readonly>' +
    // '<div class="input-group-btn">' +
    // '<button data-toggle="modal" data-target="#confirm-relationship-modal" class="btn btn-primary afiliate" type="button">Afiliar-se</button>' +
    // '<button data-toggle="modal" data-target="#confirm-relationship-modal" class="btn btn-danger cancel" type="button">Cancelar</button>' +
    // '</div>' +
    // '</div>' +
    // '</form>';

    // elements += element;
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
    // var element =
    // '<div class="panel-group" id="'+i+'">'+
    // '<div class="panel panel-default">'+
    // '<div class="panel-heading">'+
    // '<div class="panel-title">'+
    // '<div class="">'+
    // '<div class="title">'+
    // '<strong>"Nome da República" - Masculino  </strong><span class="badge">4/7 membros</span>'+
    // '</div>'+
    // '<a class="detail" data-toggle="collapse" href="#collapse'+i+'">Mais detalhes</a>'+
    // '</div>'+
    // '</div>'+
    // '</div>'+
    // '<div id="collapse'+i+'" class="panel-collapse collapse in">'+
    // '<div class="panel-body">'+
    // '<p><b>Representante:</b> Jovem 2 <b>FCT</b> - veterano</p>'+
    // '<p><b>Integrante:</b> Jovem 2 <b>FCT</b> - bixo</p>'+
    // '<p><b>Integrante:</b> Jovem 2 <b>FCT</b> - veterano</p>'+
    // '<p><b>Integrante:</b> Jovem 2 <b>FCT</b> - bixo</p>'+
    // '</div>'+
    // '</div>'+
    // '</div>'+
    // '</div>';
    //
    // elements += element;
  }
  list.innerHTML = list.innerHTML + elements;
}

$(document).ready(function()
{
  populateFilters([{name:"Todos"},{name:"São Paulo"},{name:"Rio de Janeiro"}],"estado");
  getDataState("Todos");

  // populateVeterans(veteran_from_state());
  populateFreshmans(freshman_list);
  populateVeterans(veteran_list);

  // NEED TO CREATE THE JSON OF THE REPUBLICS AND PASS AS PARAMETER IN THE BELOW INVOCATION.
  populateRepublics(/**/);
});

var no_data = [{name:"Não possui dados"}];

// POPULATING STATE
function getDataState(title)
{
  // TODOS SELECTED
  if( title == "Todos" )
  {
    populateFilters([{name:"Todos"},{name:"Presidente Prudente"},{name:"Rio de Janeiro"},{name:"São José do Rio Preto"}],"cidade");
    populateFilters([{name:"Todos"},{name:"UFRJ"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    // populateVeterans(veteran_from_state());
    populateFreshmans(freshman_list);
    populateVeterans(veteran_list);
  }
  // SÃO PAULO SELECTED
  else if( title == "São Paulo" )
  {
    populateFilters([{name:"Todos"},{name:"São José do Rio Preto"},{name:"Presidente Prudente"}],"cidade");
    populateFilters([{name:"Todos"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    populateFreshmans(freshman_list);
    populateVeterans(veteran_list);
  }
  // RIO DE JANEIRO SELECTED
  else
  {
    populateFilters([{name:"Todos"},{name:"Rio de Janeiro"}],"cidade");
    populateFilters([{name:"Todos"},{name:"UFRJ"}],"universidade");
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    cleanFreshmans();
    cleanVeterans();
  }
}
function getDataCity(title)
{
  // TODOS SELECTED
  if( title == "Todos" )
  {
    populateFilters([{name:"Todos"},{name:"UFRJ"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    populateFreshmans(freshman_list);
    populateVeterans(veteran_list);
  }
  // PRESIDENTE PRUDENTE SELECTED
  else if( title == "Presidente Prudente" )
  {
    populateFilters([{name:"Todos"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    populateFreshmans(freshman_list);
    populateVeterans(veteran_list);
  }
  // SÃO JOSÉ DO RIO PRETO SELECTED
  else if( title == "São José do Rio Preto" )
  {
    populateFilters(no_data,"universidade");
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    cleanFreshmans();
    cleanVeterans();
  }
  // RIO DE JANEIRO SELECTED
  else
  {
    populateFilters([{name:"Todos"},{name:"UFRJ"}],"universidade");
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    cleanFreshmans();
    cleanVeterans();
  }
}
function getDataUnivesity(title)
{
  // TODOS SELECTED
  if( title == "Todos" )
  {
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    var element = document.getElementById("cidade");
    var elementValue = element.options[element.selectedIndex].value;

    if( elementValue == "Presidente Prudente" )
    {
      populateFreshmans(freshman_list);
      populateVeterans(veteran_list);
    }
    else
    {
      cleanFreshmans();
      cleanVeterans();
    }
  }

  // UNESP SELECTED
  else if( title == "UNESP" )
  {
    populateFilters([{name:"Todos"},{name:"FCT"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    populateFreshmans(freshman_fct());
    populateVeterans(veteran_list);
  }

  // FIPP SELECTED
  else if( title == "UNOESTE" )
  {
    populateFilters([{name:"Todos"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"CC"}],"curso");

    populateFreshmans(freshman_fipp());
    cleanVeterans();
  }

  // UFRG
  else
  {
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    cleanFreshmans();
    cleanVeterans();
  }
}
function getDataCampus(title)
{
  // TODOS SELECTED
  if( title == "Todos" )
  {
    var element = document.getElementById("universidade");
    var elementValue = element.options[element.selectedIndex].value;

    switch( elementValue )
    {
      case "UNESP":
        populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");
        populateFreshmans(freshman_fct());
        populateVeterans(veteran_list);
      return;
      case "UNOESTE":
        populateFilters([{name:"Todos"},{name:"CC"}],"curso");
        populateFreshmans(freshman_fipp());
        cleanVeterans();
      return;
      case "TODOS":
        populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");
        populateFreshmans(freshman_list);
        populateVeterans(veteran_list);
      return;
      case "UFRJ":
      return;
    }
  }

  // FCT SELECTED
  else if( title == "FCT" )
  {
    populateFilters([{name:"Todos"},{name:"CC"},{name:"GEO"}],"curso");

    populateFreshmans(freshman_fct());
    populateVeterans(veteran_list);
  }

  // FIPP SELECTED
  else if( title == "FIPP" )
  {
    populateFilters([{name:"Todos"},{name:"CC"}],"curso");

    populateFreshmans(freshman_fipp());
    cleanVeterans();
  }
}
function getDataCourse(title)
{
  var state = document.getElementById("estado");
  var stateValue = state.options[state.selectedIndex].value;

  var university = document.getElementById("universidade");
  var universityValue = university.options[university.selectedIndex].value;

  var campus = document.getElementById("campus");
  var campusValue = campus.options[campus.selectedIndex].value;

  switch( stateValue )
  {
    case "Rio de Janeiro":
      cleanFreshmans();
      cleanVeterans();
      return;

    // TODOS/SÃO PAULO SELECTED
    default:
      switch( universityValue )
      {
          case "Todos":
            switch( campusValue )
            {
              case "Todos":
              {
                if( title == "GEO" )
                {
                  cleanFreshmans();
                  populateVeterans(veteran_geo());
                }
                else if( title == "CC" )
                {
                  populateFreshmans(freshman_list);
                  populateVeterans(veteran_cc());
                }
                else if( title == "Todos" )
                {
                  populateFreshmans(freshman_list);
                  populateVeterans(veteran_list);
                }
              }
              return;
              case "FCT":
              {
                if( title == "GEO" )
                {
                  cleanFreshmans();
                  populateVeterans(veteran_geo());
                }
                else if( title == "CC" )
                {
                  populateFreshmans(freshman_fct());
                  populateVeterans(veteran_cc());
                }
                else if( title == "Todos" )
                {
                  populateFreshmans(freshman_fct());
                  populateVeterans(veteran_list);
                }
              }
              return;
              case "FIPP":
              {
                if( title == "GEO" )
                {
                  cleanFreshmans();
                  cleanVeterans();
                }
                else if( title == "CC" )
                {
                  populateFreshmans(freshman_fipp());
                  cleanVeterans();
                }
                else if( title == "Todos" )
                {
                  populateFreshmans(freshman_fipp());
                  cleanVeterans();
                }
              }
              return;
            }
            return;
          case "UNESP":
            if( title == "GEO" )
            {
              cleanFreshmans();
              populateVeterans(veteran_geo());
            }
            else if( title == "CC" )
            {
              populateFreshmans(freshman_fct());
              populateVeterans(veteran_cc());
            }
            else if( title == "Todos" )
            {
              populateFreshmans(freshman_fct());
              populateVeterans(veteran_list);
            }
            return;
          case "UNOESTE":
            if( title == "GEO" )
            {
              cleanFreshmans();
              cleanVeterans();
            }
            else if( title == "CC" )
            {
              populateFreshmans(freshman_fipp());
              cleanVeterans();
            }
            else if( title == "Todos" )
            {
              populateFreshmans(freshman_fipp());
              cleanVeterans();
            }
            return;
          return;
      }
    return;
  }
}

var rep_list = [
  {
    name: "Rep1",
    id: 1,
    vacancy: 0,
    gender: "f",
    owner:freshman_list[1],
    members: [
      "Camila",
      "Eliana",
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
    name: "Rep2",
    id: 2,
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
    name: "Rep3",
    id: 3,
    vacancy: 1,
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

console.log(rep_list);
// Function to load the streets and info windows
var load_rep_list = (function() {
	for(var i=0; i< rep_list.length; i++){
	}
});

/*
var locations = [
	{lat: -22.133689, lng: -51.410490},
	{lat: -22.132188, lng: -51.405523},
	{lat: -22.121093, lng: -51.412311},
	{lat: -22.123717, lng: -51.413888}
]
*/
var marker_list = [];
var street1 = new google.maps.InfoWindow({
    	content: "<p><b>Rep1</b></p> <p>R. Osvaldo Nobre Bandeira, 79 \
				- Jardim Aquinopolisi </p> <p> Pres. Prudente - SP</p> \
				<p><a class='detail' data-toggle='collapse in' \
				href='#rep1'>Mais detalhes</a></p> \
				<p><a href='#rep1'>Mais Informações</a></p>"});
var street2 = new google.maps.InfoWindow({
    	content: "Rua 2 <a href='https://google.com'> link</a>"});
var street3 = new google.maps.InfoWindow({
    	content: "Rua 3 <a href='https://google.com'> link</a>"});
var street4 = new google.maps.InfoWindow({
    	content: "Rua 4 <a href='https://google.com'> link</a>"});

var info_list = [street1, street2, street3, street4];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14,
  center: new google.maps.LatLng(-22.125519, -51.404074),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var close_all_info = (function() {
	var i;
	for(i=0; i< info_list.length; i++){
		info_list[i].close();
	}
});
var add_markers = (function() {

	var marker, i;

	for (i = 0; i < locations.length; i++){
		marker = new google.maps.Marker({
			position: locations[i],
			map: map,
		});
		marker['infowindow'] = info_list[i];
		marker_list.push(marker);
		marker.addListener('click', function() {
			close_all_info();
			this['infowindow'].open(map, this);
		});
	}
});

add_markers();

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


var nmb_vacancy_changed = (function(value) {

  if (value>1 && value <=4){
    marker_list[0].setMap(null);
    marker_list[1].setMap(null);
    marker_list[2].setMap(null);
    marker_list[3].setMap(map);
  }
  else if (value>4){
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


$("#nmb_vacancy").keyup(function() {

	nmb_vacancy_changed(this.value);

});


$("#nmb_vacancy").change(function() {

	nmb_vacancy_changed(this.value);

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
//  map.panTo(marker_list[0].getPosition());
//  infowindow.open(map, marker);
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
