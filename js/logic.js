$(function(){});
var select = $('#tipo');

select.change(function(){
    if (select.val() == 'personal') {
        $('#for-chicken').hide();
        $('#for-personal').show('slow');
    }
    if (select.val() == 'aluno') {
        $('#for-personal').hide();
        $('#for-chicken').show('slow');
    }
});

$(document).ready(function(){
    $('.timepicker').timepicker();
});