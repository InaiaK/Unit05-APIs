var toDo = $('.description');
var save = $('.saveBtn');
var textArea = $('.description');
var timeContainer = $('time-block')

var today = moment();
$("#currentDay").text(today.format('LLLL'));

var hour = $(['#hour09am',
'#hour10am',
'#hour11am',
'#hour12pm',
'#hour01pm',
'#hour02pm',
'#hour03pm',
'#hour04pm',
'#hour05pm',
'#hour06pm',])

timeContainer.on('click',function() {
if(today == hour){$('.description')=('.present')}
else{ $('.description')=('.past','.future')
}
}
)
