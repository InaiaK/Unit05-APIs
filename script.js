$(document).ready(() => {

    var toDo = $('.description');
    var save = $('.saveBtn');
    var textArea = $('.description');
    var timeContainer = $('time-block')

    var today = moment();
    $("#currentDay").text(today.format('LLLL'));
    console.log($('#hour09am')[0].dataset)

    console.log('**********************')
    const oneHourAgo = moment().subtract('1', 'hour')
    const oneHourFromNow = moment().add('1', 'hour')

    console.log(moment().isBetween(oneHourAgo, oneHourFromNow))
    console.log(moment().isBetween(oneHourAgo, oneHourFromNow))
    console.log(moment().isBetween(oneHourAgo, oneHourFromNow))

    var hourRows = document.getElementsByClassName('hour-row')

    Array.from(hourRows).forEach(hourRow => {
        if (hourRow.dataset.hour > moment()) {
            hourRow.style.backgroundColor = 'lightgreen'
        }
        // if the hour is between the current hour and the current hour + 1

        // if the hour is more than one hour ahead of the current time
    })
    console.log(hourRows)

})