//################MAP VARS###############

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
	setVeteranNmb(0);
}
function cleanFreshmans()
{
  var list = document.getElementById("freshman_list");
  while (list.hasChildNodes())
  {
    list.removeChild(list.lastChild);
  }
	setFreshmanNmb(0);
}
function cleanRepublics()
{
  var list = document.getElementById("republic_list");
  while (list.hasChildNodes())
  {
    list.removeChild(list.lastChild);
  }
	setRepublicNmb(0);
}



var clickBtnConfirm = (function(id, kind, cancel){
	var str_id = "btn_"+kind+id;
	var str_cancel = "btn_cancel_"+kind+id; 
	btn_kind = document.getElementById(str_id);
	btn_cancel = document.getElementById(str_cancel);
	if(cancel){
		btn_cancel.classList.add('hide');
		btn_kind.classList.remove('hide');
	}
	else{
		btn_kind.classList.add('hide');
		btn_cancel.classList.remove('hide');
	}
});



var clickBtnCancel = (function(id, kind){
	console.log(id);
});


var getPersonalModal = (function(id, kind, cancel){
	modal = ''+
	'<div class="modal fade" id="modal_'+cancel+kind+id+'" role="dialog" aria-hidden="true">'+
	'	<div class="modal-dialog">'+
	'	<div class="modal-content">'+
	'		<div class="modal-header"><h3>Confirmação</h3></div>'+
	'		<div class="modal-body">'+
	'			Você realmente deseja alterar a relação'+
	'		</div>'+
	'		<div class="modal-footer">'+
	'		<button title="Botão para cancelar a relação" type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>'+
	'		<button title="Botão para confirmar a relação" onclick="clickBtnConfirm(\''+id+'\', \''+kind+'\', \''+cancel+'\')" type="button" class="btn btn-success btn-ok" data-dismiss="modal">Confirmar</button>'+
	'		</div>'+
	'	</div>'+
	'	</div>'+
	'</div>';
	return modal;
});


//item to be molded and returned, kind of freshman or veteran
var populatePeaple = (function (item, kind)
{
	var btn_text = '';
	if (kind =="freshman"){
		btn_text = "Apadrinhar";
	}
	else{
		btn_text = "Afiliar-se";
	}
	var element = '<div class="well well-sm row profile">'+
	'<div class="pull-left">'+
	'	<img class="img-circle" title="Imagem do Perfil" alt="Imagem do Perfil" src="assets/images/user.png" alt="" />'+
	'</div>'+
	'<div class="pull-left content">'+
	'	<div><span class="title">'+item.name+' - '+item.course+' - </span><span><a title="Link do Perfil" href="profile.html?id='+item.id+'&kind='+kind+'">Ver Perfil</a></span></div>'+
	'	<div>Campus: '+item.campus+'</div>'+
	'	<div>e-mail: '+item.email+'</div>'+
	'	<div>Redes sociais: <a title="Link para o Facebook do usuário" href="www.facebook.com">Facebook</a> - <a title="Link para o Instagram do usuário" href="www.instagran.com">Instagram</a></div>'+
	'</div>'+
	'<div class="pull-right">'+
	'	<button title="Botão para '+btn_text+'" id="btn_'+kind+item.id+'" data-toggle="modal" data-target="#modal_'+kind+item.id+'" class="btn btn-primary afiliate " type="button">'+btn_text+'</button>'+
	'	<button title="Botão para cancelar relação" id="btn_cancel_'+kind+item.id+'" data-toggle="modal" data-target="#modal_cancel'+kind+item.id+'" class="btn btn-danger cancel hide" type="button">Remover relação</button>'+
	'</div>'+
	getPersonalModal(item.id, kind, '')+
	getPersonalModal(item.id, kind, 'cancel')+
	'</div>';
	return element;
});


//items of peaple, list to be inserted, kind of freshman or veteran
var populatePeapleList = (function (items, list, kind){
	var elements = "";
	for(var i = 0; i < items.length; i++)
	{ 
		elements += populatePeaple(items[i], kind);
	}
	list.innerHTML += elements;
});


var populateVeterans = (function (items){
	var list = document.getElementById("veteran_list");
	cleanVeterans();
	populatePeapleList(items, list, 'veteran');	
	setVeteranNmb(items.length);
});


var populateFreshmans = (function (items){
	var list = document.getElementById("freshman_list");
	cleanFreshmans();
	populatePeapleList(items, list, 'freshman');
	setFreshmanNmb(items.length);

});


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


// hide pi
var hide_all_pi = (function(){
	var element_list = document.getElementsByClassName("pi");
	for (var i = 0; i<element_list.length; i++){
		element_list[i].classList.add('hide');
	}
});


//show and hide the progress indicator
var show_timeout_pi = (function(){
	var element_list = document.getElementsByClassName("pi");
	for (var i = 0; i<element_list.length; i++){
		element_list[i].classList.remove('hide');
	}
	setTimeout(hide_all_pi, 1000);
});


//close all balloons
var close_all_info = (function() {
	var i;
	for(i=0; i< info_list.length; i++){
		info_list[i].close();
	}
});


//click on link to the list
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
		'			<img title="Imagem do Perfil" alt="Imagem do Perfil" class="img-circle" src="assets/images/user.png" alt="" />'+
		'			</div>'+
		'			<div class="pull-left content">'+
		'			<div><span class="title">'+ member.name +' - '+ member.campus +' - </span><span><a title="Link para página de perfil" href="#">Ver Perfil</a></span></div>'+
		'			<div>'+ member.course +'</div>'+
		'			</div>'+
		'		</div>';
	return assemb_string;
});

 
var append_rep_html = (function(rep){
	
	var list = document.getElementById("republic_list");
	var gender = '' 
	if (rep.gender=='m'){
		gender = 'Masculino';
	}
	else{
		gender = 'Feminino';
	}
	var elements = 
	'<div id="rep' + rep.id + '" class="panel-group republic">'+
	'<div  class="panel panel-info" style="position:relative" >'+
	'<div class="panel-heading">'+
	'<div class="panel-title">'+
	'<div class="">'+
	'			<div class="title">'+
	'				<span>'+
	'					<img class="logo" title="Imagem da Logo da República" alt="Imagem da Logo da República" src="assets/images/home-page.png" alt="" />' +
	'				</span>'+
	'				<strong> '+ rep.name +'</strong>'+
	'				<span> - </span>'+
	'			</div>'+
	'			<span>'+
	'				<a title="Link para a localização da república no mapa do google" id="rep_on_map'+ rep.id +'" onclick="click_map_on_rep('+rep.id+')"  element_id="'+ rep.id +'" href="#map">Ver no mapa</a>'+
	'			</span>'+
	'			<a title="link para ver mais detalhes da república" class="detail" data-toggle="collapse" href="#collapse'+ rep.id +'">Mais detalhes</a>'+
	'		</div>'+
	'	</div>'+
	'	</div>'+
	'	<div id="collapse'+ rep.id +'" class="panel-collapse collapse ">'+
	'	<div class="panel-body">'+
	'		<div class="content">'+
	'		<div class="info"><b>Endereço: </b>'+ rep.address.street +
	'		<p>'+ rep.address.city_state +'</p></div>'+
	'		<div class="info"><b>Gênero: </b>'+ gender + '</div>'+
	'		<div class="info"><b>Número de contato: </b>'+ rep.phone + '</div>'+
	'		<div class="info"><b>Número de vagas: </b>'+ rep.vacancy +'</div>'+
	'		</div>'+
	'		<div class="members">'+
	'		<label for="">Representante:</label>'+
	populatePeaple(rep.owner)+
	'</div>';
	if (rep.members.length>0){
		elements = elements +
		'		<div class="members">'+
		'		<label for="">Membros:</label>';
		var member_string = '';
		for (var i=0; i<rep.members.length; i++){
			var member = rep.members[i];
			member_string = member_string + populatePeaple(member);		
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
var populateRepublic = (function(list){
	document.getElementById("republic_list").innerHTML='';
	for(var i=0; i<list.length; i++){
		append_rep_html(list[i]);
	}
	setRepublicNmb(list.length);
});


var populateRepublicMarkers = (function(list){
    hide_all();
	for(var i=0; i<list.length; i++){
		list[i].marker.setMap(map);
	}
});
//filter the number of vacancy
var check_vacancy = (function(list, value) {

	var aux_list = [];
	for (var i = 0; i<list.length;i++){
		if (list[i].vacancy>=value){
			aux_list.push(list[i]);
		}
	}
	return aux_list.slice();
});


//filter with gender
var check_gender = (function(list, male, female){
	var aux_list = [];
	if (male){
		for (var i = 0; i<list.length;i++){
			if (list[i].gender=='m'){
				aux_list.push(list[i]);
			}
		}
	}
	if (female){
		for (var i = 0; i<list.length;i++){
			if (list[i].gender=='f'){
				aux_list.push(list[i]);
			}
		}
	}
	return aux_list.slice();
});


//var state
var filter_search = (function(list, key, value){
	var aux_list = [];
	for(var i=0; i<list.length; i++){
		if(list[i][key]==value){
			aux_list.push(list[i]);
		}
	}
	return aux_list.slice();
});


var search_name_like_list = (function (list, str_search){
  var result_list = []
  for(var i = 0; i < list.length; i++)
  {
    if (list[i].name.indexOf(str_search) >= 0){
      result_list.push(list[i]);
    }
  }
  return result_list.slice();
});


var filter_all = (function(){
	var freshman_list_aux = freshman_list.slice();
	var veteran_list_aux = veteran_list.slice();
	var rep_list_aux = rep_list.slice();

	var state = document.getElementById("estado");
	var stateValue = state.options[state.selectedIndex].value;

	var city = document.getElementById("cidade");
	var cityValue = city.options[city.selectedIndex].value;

	var university = document.getElementById("universidade");
	var universityValue = university.options[university.selectedIndex].value;

	var campus = document.getElementById("campus");
	var campusValue = campus.options[campus.selectedIndex].value;

	var course = document.getElementById("curso");
	var courseValue = course.options[course.selectedIndex].value;

	var male = document.getElementById("ckb_male").checked;
	var female = document.getElementById("ckb_female").checked;
	var vacancy = document.getElementById("nmb_vacancy").value;
	var search_value = document.getElementById("ipt_search").value;

	//########## freshman_search
	//filtering state
	if (stateValue != "Todos" && stateValue !="Não possui dados"){
		freshman_list_aux = filter_search(freshman_list_aux,'state',stateValue);
	}
	//filtering city
	if (cityValue != "Todos" && cityValue !="Não possui dados"){
		freshman_list_aux = filter_search(freshman_list_aux,'city', cityValue);
	}
	//filtering university
	if (universityValue != "Todos" && universityValue !="Não possui dados"){
		freshman_list_aux = filter_search(freshman_list_aux, 'university', universityValue);
	}
	//filtering campus
	if (campusValue != "Todos" && campusValue !="Não possui dados"){
		freshman_list_aux = filter_search(freshman_list_aux, 'campus', campusValue);
	}
	//filtering course
	if (courseValue != "Todos" && courseValue !="Não possui dados"){
		freshman_list_aux = filter_search(freshman_list_aux, 'course', courseValue);
	}
	//searching text
	freshman_list_aux = search_name_like_list(freshman_list_aux, search_value);
	//populate freshman
	populateFreshmans(freshman_list_aux);
	//set badge value
	setFreshmanNmb(freshman_list_aux.length);

	//########## veteran_search
	//filtering state
	if (stateValue != "Todos" && stateValue !="Não possui dados"){
		veteran_list_aux = filter_search(veteran_list_aux,'state',stateValue);
	}
	//filtering city
	if (cityValue != "Todos" && cityValue !="Não possui dados"){
		veteran_list_aux = filter_search(veteran_list_aux,'city', cityValue);
	}
	//filtering university
	if (universityValue != "Todos" && universityValue !="Não possui dados"){
		veteran_list_aux = filter_search(veteran_list_aux, 'university', universityValue);
	}
	//filtering campus
	if (campusValue != "Todos" && campusValue !="Não possui dados"){
		veteran_list_aux = filter_search(veteran_list_aux, 'campus', campusValue);
	}
	//filtering course
	if (courseValue != "Todos" && courseValue !="Não possui dados"){
		veteran_list_aux = filter_search(veteran_list_aux, 'course', courseValue);
	}
	//searching text
	veteran_list_aux = search_name_like_list(veteran_list_aux, search_value);
	//populate veteran
	populateVeterans(veteran_list_aux);
	//set badge value
	setVeteranNmb(veteran_list_aux.length);


	//########## rep_search
	//filtering state
	if (stateValue != "Todos" && stateValue !="Não possui dados"){
		rep_list_aux = filter_search(rep_list_aux,'state',stateValue);
	}
	//filtering city
	if (cityValue != "Todos" && cityValue !="Não possui dados"){
		rep_list_aux = filter_search(rep_list_aux,'city', cityValue);
	}
	//filtering university
	if (universityValue != "Todos" && universityValue !="Não possui dados"){
		rep_list_aux = filter_search(rep_list_aux, 'university', universityValue);
	}
	//filtering campus
	if (campusValue != "Todos" && campusValue !="Não possui dados"){
		rep_list_aux = filter_search(rep_list_aux, 'campus', campusValue);
	}
	//filtering course
	if (courseValue != "Todos" && courseValue !="Não possui dados"){
		rep_list_aux = filter_search(rep_list_aux, 'course', courseValue);
	}
	//searching text
	rep_list_aux = search_name_like_list(rep_list_aux, search_value);

    //only_rep_filters
    rep_list_aux = check_vacancy (rep_list_aux, vacancy);
    rep_list_aux = check_gender(rep_list_aux, male, female);

	//populate rep
	populateRepublic(rep_list_aux);
    populateRepublicMarkers(rep_list_aux);
	//set badge value
	setRepublicNmb(rep_list_aux.length);
});
// POPULATING STATE
function getDataState(title)
{
	show_timeout_pi();
  // TODOS SELECTED
  if( title == "Todos" )
  {
    populateFilters([{name:"Todos"},{name:"Presidente Prudente"},{name:"Rio de Janeiro"},{name:"São José do Rio Preto"}],"cidade");
    populateFilters([{name:"Todos"},{name:"UFRJ"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    //populateFreshmans(freshman_list);
    //populateVeterans(veteran_list);
  }
  // SÃO PAULO SELECTED
  else if( title == "São Paulo" )
  {
    populateFilters([{name:"Todos"},{name:"São José do Rio Preto"},{name:"Presidente Prudente"}],"cidade");
    populateFilters([{name:"Todos"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    //populateFreshmans(freshman_list);
    //populateVeterans(veteran_list);
  }
  // RIO DE JANEIRO SELECTED
  else
  {
    populateFilters([{name:"Todos"},{name:"Rio de Janeiro"}],"cidade");
    populateFilters([{name:"Todos"},{name:"UFRJ"}],"universidade");
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    //cleanFreshmans();
    //cleanVeterans();
  }
	filter_all();
}
function getDataCity(title)
{
	show_timeout_pi();
  // TODOS SELECTED
  if( title == "Todos" )
  {
    populateFilters([{name:"Todos"},{name:"UFRJ"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    //populateFreshmans(freshman_list);
    //populateVeterans(veteran_list);
  }
  // PRESIDENTE PRUDENTE SELECTED
  else if( title == "Presidente Prudente" )
  {
    populateFilters([{name:"Todos"},{name:"UNESP"},{name:"UNOESTE"}],"universidade");
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    //populateFreshmans(freshman_list);
    //populateVeterans(veteran_list);
  }
  // SÃO JOSÉ DO RIO PRETO SELECTED
  else if( title == "São José do Rio Preto" )
  {
    populateFilters(no_data,"universidade");
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    //cleanFreshmans();
    //cleanVeterans();
  }
  // RIO DE JANEIRO SELECTED
  else
  {
    populateFilters([{name:"Todos"},{name:"UFRJ"}],"universidade");
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    //cleanFreshmans();
    //cleanVeterans();
  }
	filter_all();
}
function getDataUnivesity(title)
{
	show_timeout_pi();
  // TODOS SELECTED
  if( title == "Todos" )
  {
    populateFilters([{name:"Todos"},{name:"FCT"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    var element = document.getElementById("cidade");
    var elementValue = element.options[element.selectedIndex].value;

    if( elementValue == "Presidente Prudente" )
    {
      //populateFreshmans(freshman_list);
      //populateVeterans(veteran_list);
    }
    else
    {
      //cleanFreshmans();
      //cleanVeterans();
    }
  }

  // UNESP SELECTED
  else if( title == "UNESP" )
  {
    populateFilters([{name:"Todos"},{name:"FCT"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    //populateFreshmans(freshman_fct());
    //populateVeterans(veteran_list);
  }

  // FIPP SELECTED
  else if( title == "UNOESTE" )
  {
    populateFilters([{name:"Todos"},{name:"FIPP"}],"campus");
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"}],"curso");

    //populateFreshmans(freshman_fipp());
    //cleanVeterans();
  }

  // UFRG
  else
  {
    populateFilters(no_data,"campus");
    populateFilters(no_data,"curso");

    //cleanFreshmans();
    //cleanVeterans();
  }
	filter_all();
}
function getDataCampus(title)
{
	show_timeout_pi();
	filter_all();
  // TODOS SELECTED
  if( title == "Todos" )
  {
    var element = document.getElementById("universidade");
    var elementValue = element.options[element.selectedIndex].value;

    switch( elementValue )
    {
      case "UNESP":
        populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");
        //populateFreshmans(freshman_fct());
        //populateVeterans(veteran_list);
      return;
      case "UNOESTE":
        populateFilters([{name:"Todos"},{name:"Ciência da Computação"}],"curso");
        //populateFreshmans(freshman_fipp());
        //cleanVeterans();
      return;
      case "TODOS":
        populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");
        //populateFreshmans(freshman_list);
        //populateVeterans(veteran_list);
      return;
      case "UFRJ":
      return;
    }
  }

  // FCT SELECTED
  else if( title == "FCT" )
  {
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"},{name:"Geografia"}],"curso");

    //populateFreshmans(freshman_fct());
    //populateVeterans(veteran_list);
  }

  // FIPP SELECTED
  else if( title == "FIPP" )
  {
    populateFilters([{name:"Todos"},{name:"Ciência da Computação"}],"curso");

    //populateFreshmans(freshman_fipp());
    //cleanVeterans();
  }
	filter_all();
}
function getDataCourse(title)
{
	show_timeout_pi();
	filter_all();
  var state = document.getElementById("estado");
  var stateValue = state.options[state.selectedIndex].value;

  var university = document.getElementById("universidade");
  var universityValue = university.options[university.selectedIndex].value;

  var campus = document.getElementById("campus");
  var campusValue = campus.options[campus.selectedIndex].value;

  switch( stateValue )
  {
    case "Rio de Janeiro":
      //cleanFreshmans();
      //cleanVeterans();
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
                  //cleanFreshmans();
                  //populateVeterans(veteran_geo());
                }
                else if( title == "Ciência da Computação" )
                {
                  //populateFreshmans(freshman_list);
                  //populateVeterans(veteran_cc());
                }
                else if( title == "Todos" )
                {
                  //populateFreshmans(freshman_list);
                  //populateVeterans(veteran_list);
                }
              }
              return;
              case "FCT":
              {
                if( title == "Geografia" )
                {
                  //cleanFreshmans();
                  //populateVeterans(veteran_geo());
                }
                else if( title == "Ciência da Computação" )
                {
                  //populateFreshmans(freshman_fct());
                  //populateVeterans(veteran_cc());
                }
                else if( title == "Todos" )
                {
                  //populateFreshmans(freshman_fct());
                  //populateVeterans(veteran_list);
                }
              }
              return;
              case "FIPP":
              {
                if( title == "Geografia" )
                {
                  //cleanFreshmans();
                  //cleanVeterans();
                }
                else if( title == "Ciência da Computação" )
                {
                  //populateFreshmans(freshman_fipp());
                  //cleanVeterans();
                }
                else if( title == "Todos" )
                {
                  //populateFreshmans(freshman_fipp());
                  //cleanVeterans();
                }
              }
              return;
            }
            return;
          case "UNESP":
            if( title == "Geografia" )
            {
              //cleanFreshmans();
              //populateVeterans(veteran_geo());
            }
            else if( title == "Ciência da Computação" )
            {
              //populateFreshmans(freshman_fct());
              //populateVeterans(veteran_cc());
            }
            else if( title == "Todos" )
            {
              //populateFreshmans(freshman_fct());
              //populateVeterans(veteran_list);
            }
            return;
          case "UNOESTE":
            if( title == "Geografia" )
            {
              //cleanFreshmans();
              //cleanVeterans();
            }
            else if( title == "Ciência da Computação" )
            {
              //populateFreshmans(freshman_fipp());
              //cleanVeterans();
            }
            else if( title == "Todos" )
            {
              //populateFreshmans(freshman_fipp());
              //cleanVeterans();
            }
            return;
          return;
      }
    return;
  }
	filter_all();
}

// Function to load the streets and info windows
var load_rep_list = (function() {
	for(var i=0; i< rep_list.length; i++){
		var info_window = new google.maps.InfoWindow({
			content: "<p><b>" + rep_list[i].name + "</b></p>" +
				"<p>" + rep_list[i].address.street + "</p>" +
				"<p>" +  rep_list[i].address.city_state + "</p>" +
				"<p><a title='link para mais informações da república' id='link_rep" + i + "' href='#rep" + i + "'"+
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
        rep_list[i]['marker'] = marker;
		info_list.push(info_window);
		marker_list.push(marker);
	}
});


//hide markers on map
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

var reSearch = (function(){
	ipt_value = document.getElementById("ipt_search").value;
	general_search(ipt_value);
});

$("#ckb_female").change(function() {
    filter_all();
});
$("#ckb_male").change(function() {
    filter_all();
});


$("#nmb_vacancy").keyup(function() {
    filter_all();
});


$("#nmb_vacancy").change(function() {
    filter_all();
});


function search_veteran(str_search){
  var result_list = []
  var items = current_veteran_list;
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
  var items = current_freshman_list;
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
  var items = current_rep_list;
  for(var i = 0; i < items.length; i++)
  {
    if (items[i].name.indexOf(str_search) >= 0){
      result_list.push(items[i]);
    }
  }
  return result_list;
};


//set the number of results
var setRepublicNmb = (function(nmb){
	badge = document.getElementById("republic-search-result");
	badge.innerHTML = ''+nmb+'';
})


//set the number of results
var setVeteranNmb = (function(nmb){
	badge = document.getElementById("veteran-search-result");
	badge.innerHTML = ''+nmb+'';
})


//set the number of results
var setFreshmanNmb = (function(nmb){
	badge = document.getElementById("freshman-search-result");
	badge.innerHTML = ''+nmb+'';
})


$("#ipt_search").keyup(function() {
	show_timeout_pi();
	filter_all();
});


$(document).ready(function()
{
	load_rep_list();
    console.log(rep_list);
	populateFilters([{name:"Todos"},{name:"São Paulo"},{name:"Rio de Janeiro"}],"estado");
	getDataState("Todos");
	populateFreshmans(freshman_list);
	populateVeterans(veteran_list);
	populateRepublic(rep_list);

    filter_all();
});

