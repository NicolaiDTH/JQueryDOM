$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});


$('#add-pet').on('click', function() {
// Grab info from the form
 var $name = $('#pet-name').val();
 var $species = $('#pet-species').val();
 var $notes = $('#pet-notes').val();

 // Assemble the HTML of our new element with the above variables

 var $newPet = $(
    '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name + 
    '</p><p><strong>Species:</strong> ' + $species +  
    '</p><p><strong>Notes:</strong> ' + $notes + 
    '</p><span class="close">&times;</span></div></section>'  
 );

 // Attach new elements to the page

 $('#posted-pets').append($newPet);

});
