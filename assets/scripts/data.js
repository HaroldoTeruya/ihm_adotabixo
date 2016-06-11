
//##################VARS####################
var freshman_list = [
  {/*will be treated like outsider of Sao Paulo*/
    name: "Maria",
    email: "maria@mail.com",
    social_network: [
      "facebook.com/maria",
      "instagram.com/maria"
    ],
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {/*will be treated like outsider of prudente*/
    name: "Jorge",
    email: "jorge@mail.com",
    social_network: [
      "facebook.com/jorge",
      "instagram.com/jorge"
    ],
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {/* will be treated like outsider of campus*/
    name: "José",
    email: "jose@josemail.com",
    social_network: [
      "facebook.com/jose",
      "instagram.com/jose"
    ],
    campus: "FIPP",
    course: "Ciência da Computação"
  },
  {
    name: "Camila",
    email: "camila@mail.com",
    social_network: [
      "facebook.com/camila",
      "instagram.com/camila"
    ],
    campus: "FCT",
    course: "Ciência da Computação"
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
    course: "Geografia"
  },
  {
    name: "Gabriel",
    email: "gabriel@mail.com",
    social_network: [
      "facebook.com/gabriel",
      "instagram.com/gabriel"
    ],
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {
    name: "Giovana",
    email: "giovana@mail.com",
    social_network: [
      "facebook.com/giovana",
      "instagram.com/giovana"
    ],
    campus: "FCT",
    course: "Ciência da Computação"
  },
  {
    name: "Renata",
    email: "renata@mail.com",
    social_network: [
      "facebook.com/renata",
      "instagram.com/renata"
    ],
    campus: "FCT",
    course: "Ciência da Computação"
  }
]


//################# REP LIST
var rep_list = [
  {
    name: "Rep0_fera",
    id: 0,
    vacancy: 0,
    gender: "f",
	phone: "(18) 987678980",
    owner:veteran_list[2],
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
    name: "Rep1_cacau",
    id: 1,
    vacancy: 2,
    gender: "f",
	phone: "(18) 987632980",
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
    name: "Rep2_bexiga",
    id: 2,
    vacancy: 1,
    gender: "m",
	phone: "(18) 981238980",
    owner: veteran_list[0],
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
    name: "Rep3_barriga",
    id: 3,
    vacancy: 4,
    gender: "m",
	phone: "(18) 987600170",
    owner: veteran_list[1],
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


//#####################FUNCTIONS####################
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
};


var close_all_info = (function() {
	var i;
	for(i=0; i< info_list.length; i++){
		info_list[i].close();
	}
});


var click_map_on_rep = (function(id){
	close_all_info();
	var marker = marker_list[id];
	map.panTo(marker.getPosition());
	marker['info_window'].open(map, marker);
});	


var assemb_string_member = (function(member){
	var assemb_string = 
		'		<div class="well well-sm profile">'+
		'			<div class="pull-left">'+
		'			<img class="img-circle" src="assets/images/user.png" alt="" />'+
		'			</div>'+
		'			<div class="pull-left content">'+
		'			<div><span class="title">'+ member.name +' - '+ member.campus +' - </span><span><a href="#">Ver Perfil</a></span></div>'+
		'			<div>'+ member.course +'</div>'+
		'			</div>'+
		'		</div>';
	return assemb_string;
});

 
var append_rep_html = (function(rep){
	
	var list = document.getElementById("republic_list");
	var elements = 
	'<div id="rep' + rep.id + '" class="panel-group republic">'+
	'<div  class="panel panel-info" style="position:relative" >'+
	'<div class="panel-heading">'+
	'<div class="panel-title">'+
	'<div class="">'+
	'			<div class="title">'+
	'				<span>'+
	'					<img class="logo" src="assets/images/home-page.png" alt="" />' +
	'				</span>'+
	'				<strong> '+ rep.name +'</strong>'+
	'				<span> - </span>'+
	'			</div>'+
	'			<span>'+
	'				<a id="rep_on_map'+ rep.id +'" onclick="click_map_on_rep('+rep.id+')"  element_id="'+ rep.id +'" href="#map">Ver no mapa</a>'+
	'			</span>'+
	'			<a class="detail" data-toggle="collapse" href="#collapse'+ rep.id +'">Mais detalhes</a>'+
	'		</div>'+
	'	</div>'+
	'	</div>'+
	'	<div id="collapse'+ rep.id +'" class="panel-collapse collapse ">'+
	'	<div class="panel-body">'+
	'		<div class="content">'+
	'		<div class="info"><b>Endereço: </b>'+ rep.address.street +
	'		<p>'+ rep.address.city_state +'</p></div>'+
	'		<div class="info"><b>Número de contato: </b>'+ rep.phone + '</div>'+
	'		<div class="info"><b>Número de vagas: </b>'+ rep.vacancy +'</div>'+
	'		</div>'+
	'		<div class="members">'+
	'		<label for="">Representante:</label>'+
	assemb_string_member(rep.owner)+
	'</div>';
	if (rep.members.length>0){
		elements = elements +
		'		<div class="members">'+
		'		<label for="">Membros:</label>';
		var member_string = '';
		for (var i=0; i<rep.members.length; i++){
			var member = rep.members[i];
			member_string = member_string + assemb_string_member(member);		
		}
		elements = elements + member_string;
	}	
	elements = elements+
	'</div>'+
	'</div>'+
	'</div>'+
	'</div>'+
	'</div>';
	list.innerHTML = list.innerHTML + elements;
});


// Function to load the html for reps
var load_rep_html = (function(){
	for(var i=0; i<rep_list.length; i++){
		append_rep_html(rep_list[i]);
	}
});


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
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

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
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

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
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    populateFreshmans(freshman_list);
    populateVeterans(veteran_list);
  }
  // PRESIDENTE PRUDENTE SELECTED
  else if( title == "Presidente Prudente" )
  {
    populateFilters([{name:"Todos"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

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
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

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
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    populateFreshmans(freshman_fct());
    populateVeterans(veteran_list);
  }

  // FIPP SELECTED
  else if( title == "UNOESTE" )
  {
    populateFilters([{name:"Todos"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"}],"curso");

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
        populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");
        populateFreshmans(freshman_fct());
        populateVeterans(veteran_list);
      return;
      case "UNOESTE":
        populateFilters([{name:"Todos"},{name:"Ciência da Computação"}],"curso");
        populateFreshmans(freshman_fipp());
        cleanVeterans();
      return;
      case "TODOS":
        populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");
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
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    populateFreshmans(freshman_fct());
    populateVeterans(veteran_list);
  }

  // FIPP SELECTED
  else if( title == "FIPP" )
  {
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"}],"curso");

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
                if( title == "Geografia" )
                {
                  cleanFreshmans();
                  populateVeterans(veteran_geo());
                }
                else if( title == "Ciência da Computação" )
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
                if( title == "Geografia" )
                {
                  cleanFreshmans();
                  populateVeterans(veteran_geo());
                }
                else if( title == "Ciência da Computação" )
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
                if( title == "Geografia" )
                {
                  cleanFreshmans();
                  cleanVeterans();
                }
                else if( title == "Ciência da Computação" )
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
            if( title == "Geografia" )
            {
              cleanFreshmans();
              populateVeterans(veteran_geo());
            }
            else if( title == "Ciência da Computação" )
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
            if( title == "Geografia" )
            {
              cleanFreshmans();
              cleanVeterans();
            }
            else if( title == "Ciência da Computação" )
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

// Function to load the streets and info windows
var load_rep_list = (function() {
	for(var i=0; i< rep_list.length; i++){
		var info_window = new google.maps.InfoWindow({
			content: "<p><b>" + rep_list[i].name + "</b></p>" +
				"<p>" + rep_list[i].address.street + "</p>" +
				"<p>" +  rep_list[i].address.city_state + "</p>" +
				"<p><a id='link_rep" + i + "' href='#rep" + i + "'"+
				" element_id='"+ i +"'>" +
				"Mais Informações</a></p>"});
		var marker = new google.maps.Marker({
			position: rep_list[i].address.location,
			map: map,
		});
		marker['info_window'] = info_window;
		marker['id'] = i;
		marker.addListener('click', function() {
			close_all_info();
			this['info_window'].open(map, this);
			document.getElementById("link_rep"+this['id']).addEventListener("click", function(){
				var id = this.getAttribute("element_id");
				document.getElementById("collapse"+id).setAttribute("class",
										"in");
			});
		});
		info_list.push(info_window);
		marker_list.push(marker);
	}
});



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


load_rep_list();
load_rep_html();

