$(document).on('click', '#close-preview0', function(){$('.image-preview0').popover('hide');$('.image-preview0').hover(function () {$('.image-preview0').popover('show');},function () {$('.image-preview0').popover('hide');});});
$(document).on('click', '#close-preview1', function(){$('.image-preview1').popover('hide');$('.image-preview1').hover(function () {$('.image-preview1').popover('show');},function () {$('.image-preview1').popover('hide');});});
$(document).on('click', '#close-preview2', function(){$('.image-preview2').popover('hide');$('.image-preview2').hover(function () {$('.image-preview2').popover('show');},function () {$('.image-preview2').popover('hide');});});
$(document).on('click', '#close-preview3', function(){$('.image-preview3').popover('hide');$('.image-preview3').hover(function () {$('.image-preview3').popover('show');},function () {$('.image-preview3').popover('hide');});});

$(function()
{
    var closebtn = $('<button/>',
    {
      type:"button",
      text: 'x',
      id: 'close-preview0',
      style: 'font-size: initial;',
    });

    closebtn.attr("class","close pull-right");

    $('.image-preview0').popover({
      trigger:'manual',
      html:true,
      title: "<strong>Visualizar</strong>"+$(closebtn)[0].outerHTML,
      content: "Não existe imagem",
      placement:'bottom'
    });

    $('.image-preview-clear0').click(function(){
      $('.image-preview0').attr("data-content","").popover('hide');
      $('.image-preview-filename0').val("");
      $('.image-preview-clear0').hide();
      $('.image-preview-input0 input:file').val("");
      $(".image-preview-input-title0").text("Procurar");
    });

    $(".image-preview-input0 input:file").change(function (){
      var img = $('<img/>', {
        id: 'dynamic',
        width:250,
        height:200});

      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function (e)
      {
        $(".image-preview-input-title0").text("Procurar");
        $(".image-preview-clear0").show();
        $(".image-preview-filename0").val(file.name);
        img.attr('src', e.target.result);
        $(".image-preview0").attr("data-content",$(img)[0].outerHTML).popover("show");
      }
      reader.readAsDataURL(file);
    });
});
$(function() {
    var closebtn = $('<button/>', {type:"button",text: 'x',id: 'close-preview1',style: 'font-size: initial;',});
    closebtn.attr("class","close pull-right");
    $('.image-preview1').popover({trigger:'manual',html:true,title: "<strong>Visualizar</strong>"+$(closebtn)[0].outerHTML,content: "There's no image",placement:'bottom'});
    $('.image-preview-clear1').click(function(){$('.image-preview1').attr("data-content","").popover('hide');$('.image-preview-filename1').val("");$('.image-preview-clear1').hide();$('.image-preview-input1 input:file').val("");$(".image-preview-input-title1").text("Procurar");});
    $(".image-preview-input1 input:file").change(function (){var img = $('<img/>', {id: 'dynamic',width:250,height:200});var file = this.files[0];var reader = new FileReader();reader.onload = function (e) {$(".image-preview-input-title1").text("Change");$(".image-preview-clear1").show();
    $(".image-preview-filename1").val(file.name);
    img.attr('src', e.target.result);
    $(".image-preview1").attr("data-content",$(img)[0].outerHTML).popover("show");
  }
  reader.readAsDataURL(file);});
});
$(function() {
    var closebtn = $('<button/>', {
      type:"button",text: 'x',
      id: 'close-preview2',
      style: 'font-size: initial;',
    });

    closebtn.attr("class","close pull-right");

    $('.image-preview2').popover({
      trigger:'manual',
      html:true,
      title: "<strong>Visualizar</strong>"+$(closebtn)[0].outerHTML,
      content: "There's no image",
      placement:'bottom'
    });
    $('.image-preview-clear2').click(function(){$('.image-preview2').attr("data-content","").popover('hide');$('.image-preview-filename2').val("");$('.image-preview-clear2').hide();$('.image-preview-input2 input:file').val("");$(".image-preview-input-title2").text("Procurar");});
    $(".image-preview-input2 input:file").change(function (){var img = $('<img/>', {id: 'dynamic',width:250,height:200});var file = this.files[0];var reader = new FileReader();reader.onload = function (e) {$(".image-preview-input-title2").text("Change");$(".image-preview-clear2").show();
    $(".image-preview-filename2").val(file.name);
    img.attr('src', e.target.result);
    $(".image-preview2").attr("data-content",$(img)[0].outerHTML).popover("show");
  }
  reader.readAsDataURL(file);});
});
$(function() {
    var closebtn = $('<button/>', {type:"button",text: 'x',id: 'close-preview3',style: 'font-size: initial;',});
    closebtn.attr("class","close pull-right");
    $('.image-preview3').popover({trigger:'manual',html:true,title: "<strong>Visualizar</strong>"+$(closebtn)[0].outerHTML,content: "There's no image",placement:'bottom'});
    $('.image-preview-clear3').click(function(){$('.image-preview3').attr("data-content","").popover('hide');$('.image-preview-filename3').val("");$('.image-preview-clear3').hide();$('.image-preview-input3 input:file').val("");$(".image-preview-input-title3").text("Procurar");});
    $(".image-preview-input3 input:file").change(function (){var img = $('<img/>', {id: 'dynamic',width:250,height:200});var file = this.files[0];var reader = new FileReader();reader.onload = function (e) {$(".image-preview-input-title3").text("Change");$(".image-preview-clear3").show();
    $(".image-preview-filename3").val(file.name);
    img.attr('src', e.target.result);
      $(".image-preview3").attr("data-content",$(img)[0].outerHTML).popover("show");
    }
    reader.readAsDataURL(file);
  });
});
