//
// $('.time-block').each(function () {
//     var hour = $(this).data('hour');
//     var message = localStorage.getItem(hour);
//     $(this).find('.description').text(message);
//     $(this).find('.hour').text(hour);
//     $(this).addClass(hour > curr ? 'future' : hour < curr ? 'past' : 'present');
//     // console.log(this)
// })
//
// $('.time-block').on('click', '.saveBtn', function () {
//     var result = $(this).parent().find('.description').val();
//     localStorage.setItem($(this).parent().data('hour'), result);
// })
