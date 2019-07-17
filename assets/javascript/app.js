$(document).ready(function() {
    
    var cars = ['Acura', 'Astin Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Cadillac', 'Chevrolet', 'Chysler',
     'Dodge', 'Ford', 'GM', 'Honda', 'Mercedes-Benz']
    
    
     //  console.log(cars[i]);
     
     
      function displayCarInfo(carName){

         
        //  var car = $(this).attr("car-name")
         var queryUrl = "https://api.giphy.com/v1/gifs/search?q="+carName+"&api_key=jfcTQP4bI55TPsssWPh2sCcdB8QwCDfG&limit=12&rating=g";
         $.ajax({
             url:queryUrl,
             method:'GET'
            }).then(function(car){
                console.log(queryUrl);
                for(var i = 0; i < car.data.length; i++){

                    var imageDiv = $('<div class="col-md-4">');
                    //div that will hold the images
                    var rating = $('<div>');
                    var gifImage = $('<img>'); 
                    var stillImage;

                    gifImage.addClass('newGif');
                
                    rating.html("Rated: " + car.data[i].rating);
                    imageDiv.append(rating);
                    gifImage.attr('src', car.data[i].images.fixed_height_small['url']);
                    
                    imageDiv.append(gifImage);
                    $('#images').append(imageDiv);



                    
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
                    var button =$("<button>");
                    button.addClass("btn btn-primary btn-sm");
                    // button.type("button")
                    button.attr("car-name");
                    button.text(cars[i]);
                    $("#buttons-row").append(button);
                }
            }
            
            $(document).on('click','.btn', function(event){
                $('#images').empty();
                var carName = event.target.innerHTML;
                displayCarInfo(carName);
            });

            renderButtons();


    
        
    


































   
})




