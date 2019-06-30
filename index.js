$(function(){
     // Handle the check event   
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        let clickedLabel = $(this).find('.button-label');
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        clickedLabel.text() === "check"? clickedLabel.text('uncheck') : clickedLabel.text('check');
    });
    // Handle the add item event
    $('#js-shopping-list-form').on('click', 'button', function(event){
        event.preventDefault();
       let shopItem = $(this).closest('#js-shopping-list-form').find('input').val();
       // Add item only if a name is entered
       if (shopItem.trim() !== ""){     
            $('.shopping-list').append($('<li style="display:none;">' +
            '<span class="shopping-item">'+ shopItem + '</span>'+
            '<div class="shopping-item-controls">'+
                '<button class="shopping-item-toggle">'+
                '<span class="button-label">check</span>'+
                '</button>'+
                '<button class="shopping-item-delete">'+
                '<span class="button-label">delete</span>'+
                '</button>'+
            '</div>'+
            '</li>')); 
            $('.shopping-list').find('li:last').slideDown('fast');
        }
    });
    // Handle the delete event
    $('body').on('click', '.shopping-item-delete', function(){
       $(this).closest('li').fadeOut('fast', function() { 
           $(this).remove();
         });
    });

});