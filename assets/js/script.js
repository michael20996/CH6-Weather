
$(document).ready(function(){
    $('#add-city').click(function(){
        var city = $('#enter-city').val();
        
        if(city != ''){
            $.ajax({
                url:'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=b89bedbdb175bace8586fd50fc311542',
                type: 'GET',
                dataType: 'json',
                success: function(response){
                    console.log(response)
                    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
                    $(".wind").text("Wind Speed: " + response.wind.speed);
                    $(".humidity").text("Humidity: " + response.main.humidity);
                    $(".temp").text("Temperature (F): " + response.main.temp);
                    $('.uv-index').text("Uv-index: " + response)
            
                }
            })
        }else{
            $('#error').html('Cannot be empty')
        }

      
        
    })
       
})

