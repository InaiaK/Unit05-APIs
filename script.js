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

// Present,Past or Future 
timeContainer.on('click',function() {
if(today == hour){$('.description')=('.present')}
else{ $('.description')=('.past','.future')
}
if(today < hour){$('.description')=('.past')}
else{ $('.description')=('.present','.future')
}
if(today > hour){$('.description')=('.future')}
else{ $('.description')=('.present','.past'))}