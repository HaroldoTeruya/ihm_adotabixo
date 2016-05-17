$(document).ready(function()
{
	$('#page_effect').fadeIn(2000);
    // $('a').click(function(e)
		// {
    //    e.preventDefault();
		//
    //    var target= $(this).attr("href");
    //    $target=$(target);
		//
    //    $('html,body').animate(
		// 		 {
		// 			 scrollTop:$target.offset().top - 50
		// 		 },900,'swing');
    // });

		$(".introduction_apresentation button").click(function()
		{
    	$('html,body').animate({scrollTop: $("#video_section").offset().top - 50},'slow');
		});
		$(".deliveries_button").click(function()
		{
			$('html,body').animate({scrollTop: $("#deliveries_section").offset().top - 50},'slow');
		});
		$(".video_button").click(function()
		{
			$('html,body').animate({scrollTop: $("#video_section").offset().top - 50},'slow');
		});

		$(".navbar-header .navbar-brand").click(function()
		{
    	$('html,body').animate({scrollTop: $("#myCarousel").offset().top - 50},'slow');
		});
		$(".beginning").click(function()
		{
    	$('html,body').animate({scrollTop: $("#myCarousel").offset().top - 50},'slow');
		});
		$("#menu-toggle").click(function(e)
		{
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});
		$("#tab-begin-caller").click(function(e)
		{
			e.preventDefault();
			$("#tab-begin-starter").click();
		});
		$(function()
		{
			$('#nav li a').click(function()
			{
				$('#nav li').removeClass();
				$(this).parent().addClass('active');
			});
		});

		var estados = document.getElementsByClassName("estado");
		var cidades = document.getElementsByClassName("cidade");

		for(var i=0; i<estados.length; i++) {
			new dgCidadesEstados({
				estado: estados[i],
				cidade: cidades[i],
				estadoVal: '<%=Request("estado") %>',
				cidadeVal: '<%=Request("cidade") %>'
			});
		}

		$('[data-toggle="tooltip"]').tooltip(); 
});
