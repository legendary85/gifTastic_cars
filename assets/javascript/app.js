$(document).ready(function () {

    //array of different car makes stored in a cars variable
    var cars = ['Acura', 'Astin Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Cadillac', 'Chevrolet', 'Chrysler',
        'Dodge', 'Ford', 'GM', 'Honda', 'Mercedes-Benz']


    //function when called will display car images
    function displayCarInfo(carName) {

        //variable where my url is stored.
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + carName + "&api_key=jfcTQP4bI55TPsssWPh2sCcdB8QwCDfG&limit=12&rating=g";
        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then(function (car) {
            console.log(queryUrl);

        //loops through the entire length of selections array
            for (var i = 0; i < car.data.length; i++) {

        //creates new elements 
                var imageDiv = $('<div class="col-md-4">');
                var rating = $('<div>');
                var gifImage = $('<img>');

        //adding a class to gifImage div
                gifImage.addClass('newGif');
                //rating from car data wll pint         
                rating.html( '<p class="rating">' + "Rating: " + car.data[i].rating + "</p>" );
                imageDiv.append(rating);
                gifImage.attr('src', car.data[i].images.fixed_height_small.url);
                gifImage.attr('data-animate', car.data[i].images.fixed_height_small.url); 
                gifImage.attr('data-still', car.data[i].images.fixed_height_small_still.url);
                gifImage.attr('data-state', "animate"); 
                
                imageDiv.append(gifImage);
                $('#images').append(imageDiv);
                console.log(gifImage);
            }
        });
    }


        //when clicked, if data-state is animate
        //change image to still and attribute to still
        //else change image to motionImage and attribute to animate

    $(document).on('click',".newGif", function(event){
        event.preventDefault();
        var stillImage = $(this).attr('data-still');
        var motionImage = $(this).attr('data-animate');

          if($(this).attr('data-state')==="animate"){
            $(this).attr('src', stillImage );
            $(this).attr('data-state',"still")
          }else
          {
            $(this).attr('src', motionImage);
            $(this).attr('data-state',"animate");


          }

    })

    //when clicked the  input value of searchCars is pushed to cars array
    //button is rendered
    $('#search-button').on('click', function (event) {
        event.preventDefault();
        cars.push($('#searchCars').val())
        console.log(cars);
        renderButtons();
    })


    //genereates each button by the length of the array.
    function renderButtons() {

        $('#buttons-row').empty();
        for (var i = 0; i < cars.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-primary btn-sm");
            // button.type("button")
            button.attr("car-name");
            button.text(cars[i]);
            $("#buttons-row").append(button);
        }
    }

    //when clicked the name of event.target is stored as variablee carName
    //carName is sent to the displayCarInfo function
    $(document).on('click', '.btn', function (event) {
        $('#images').empty();
        var carName = event.target.innerHTML;
        
        displayCarInfo(carName);
    });

    // renders buttons as the browser loads up.
    renderButtons();








































})




