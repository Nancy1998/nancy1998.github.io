function Loading(){
    
alert("Welcome to my Website. (Click on the name Nancy for some information on her)");
}        
function Load(){
    alert("Hey there I'm Nancy and I did these projects at Adobe at a program call Girls Who Code! To learn more about me you should click on about me. THANKS!")
}
function myFunction() {
    var img = document.getElementById("hi");
    img.src = "paddle2.jpg";
    //img.src = "paddlecode.jpg";//
    //img.src = "ballcode.jpg";//
}
function Function() {
    var img = document.getElementById("hello");
    img.src = "house.jpg";
}
function myF() {
    var img = document.getElementById("pig_game");
    img.src = "pig2.jpg";
}

function initMap() {
    var myLatLng = {lat: 47.648055, lng: -122.348490};

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 8
    });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Adobe'
      });
     var contentString = '<p>Adobe is company where I did a program call Girls Who Code. Here I learn how to code in different languages but also meet and make new friends. It is one of my favorite places to go to because I got to learn different languages in code which makes a different types of programs(games, apps, etc). Also its a place where I never felt that I was judge for asking questions(even if it was an obvious answer) or getting errors.</p>'  
     var infowindow = new google.maps.InfoWindow({
        content: contentString
     });
     marker.addListener('click', function() {
         infowindow.open(map, marker);
     });
}