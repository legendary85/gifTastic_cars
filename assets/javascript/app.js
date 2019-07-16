$(document).ready(function() {
    
    var cars = ['Acura', 'Astin Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Cadillac', 'Chevrolet', 'Chysler',
     'Dodge', 'Ford', 'GM', 'Honda', 'Mercedes-Benz']
    
    
     //  console.log(cars[i]);
     
     
      function displayCarInfo(carName){

         
        //  var car = $(this).attr("car-name")
         var queryUrl = "https://api.giphy.com/v1/gifs/search?q="+carName+"&api_key=jfcTQP4bI55TPsssWPh2sCcdB8QwCDfG&limit=10";
         $.ajax({
             url:queryUrl,
             method:'GET'
            }).then(function(car){
                console.log(queryUrl);
                for(var i = 0; i < car.data.length; i++){

                    var imageDiv = $('<div>');
                    //div that will hold the images
                    var rating = $('<div>');
                    var gifImage = $('<img>'); 
                    var stillImage;
                
                    rating.html(car.data[i].rating);
                    $('#images').append(rating);
                    gifImage.attr('src', car.data[i].images.fixed_height_small['url']);
                    
                    $('#images').append(gifImage);
                }
            });
        }
           
                
                $('#search-button').on('click', function(event){
                    event.preventDefault();
                    cars.push($('#searchCars').val())
                    console.log(cars);
                    renderButtons();
                })    
            
            function renderButtons() {
                
                $('#buttons-row').empty();
                for(var i = 0; i < cars.length; i++){
                    var button =$('<button>');
                    button.addClass('car');
                    button.attr("car-name");
                    button.text(cars[i]);
                    $('#buttons-row').append(button);
                }
            }
            
            $(document).on('click','.car', function(event){
                var carName = event.target.innerHTML;
                displayCarInfo(carName);
            });

            renderButtons();


    
        
    


































   
})




