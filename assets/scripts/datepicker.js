$(document).ready(function()
{
  $('#datepicker0').datepicker({
    language: 'pt-BR',
    todayHighlight: true,
    format: "dd/mm/yyyy"
  });
  $('#datepicker1').datepicker({
    language: 'pt-BR',
    todayHighlight: true,
    format: "dd/mm/yyyy",
    beforeShow: function() {
      $(this).css("z-index","1050");
    }
  });
  $('#datepicker1').on("changeDate", function() {
    $('#datepicker1-output').val(
        $('#datepicker1').datepicker('getFormattedDate')
    );
});
});
