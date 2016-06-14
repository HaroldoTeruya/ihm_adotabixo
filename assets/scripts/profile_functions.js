//#################FUNCTIONS PROFILE################
var getParameterByName = (function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
});


var populate_profile = (function(){
    kind = getParameterByName('kind');
    id = getParameterByName('id');
    console.log(kind);
    console.log(id);
});

