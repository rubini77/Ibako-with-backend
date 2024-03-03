
$(document).ready(function() {
    var popup = $('#popup');

    
    popup.css('display', 'none');

    
    $('#user-icon').click(function(event) {
        event.preventDefault();
        popup.css('display', 'flex');
    });

    
    $(document).mouseup(function(event) {
        if (!popup.is(event.target) && popup.has(event.target).length === 0) {
            popup.css('display', 'none');
        }
    });

    
    $('#close-button').click(function() {
        popup.css('display', 'none');
    });
});

// AOS animation
// AOS.init({
//     duration: 800,
//   });
