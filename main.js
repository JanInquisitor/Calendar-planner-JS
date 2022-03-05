// Grab elements
var rootEl = $('#root');
var containerEl = $('.container');

var curr = moment().add(1, 'hours').hour();
var curr2 = moment().add(1, 'hours').format('H A');
$('#currentDay').text(moment().format('LLL'));


function createTimeBlock(index) {
    // Create the rows of the time blocks
    var timeBlockEl = $('<div>');
    timeBlockEl.attr('class', 'row time-block');
    timeBlockEl.attr('data-hour', index);

    var hourBlockEl = $('<div>')
    hourBlockEl.attr('class', 'col-1 hour p-3')
    // hourBlockEl[0].innerText = '';

    var textAreaEl = $('<textarea>');
    textAreaEl.attr('class', 'col-10 description');

    var iconEl = $('<i>');
    iconEl.attr('class', 'fas fa-save')

    var saveBtnEl = $('<button>');
    saveBtnEl.attr('class', 'col-1 saveBtn');
    saveBtnEl.append(iconEl)


// This is the complete time block element
    timeBlockEl.append(hourBlockEl);
    timeBlockEl.append(textAreaEl);
    timeBlockEl.append(saveBtnEl);

    return timeBlockEl;
}

// Appending & Logic
for (i = 0; i < 24; i++) {
    var finishedTimeBlock = createTimeBlock(i)
    var hour = finishedTimeBlock.data('hour');
    var message = localStorage.getItem(hour);

    finishedTimeBlock.find('.description').text(message);
    finishedTimeBlock.addClass(hour > curr ? 'future' : hour < curr ? 'past' : 'present')
    finishedTimeBlock.find('.hour').text(hour)

    finishedTimeBlock.on('click', '.saveBtn', function () {
        var result = $(this).parent().find('.description').val();
        localStorage.setItem($(this).parent().data('hour'), result);
    });

    containerEl.append(finishedTimeBlock);
}
