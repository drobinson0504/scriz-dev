//alert("Hey guys! So, this is the basic set up for the website. Each part of the site has a little something so it's at least showing up in Github, the folders will not show up if they are empty. Feel free to adjust as you add content. Look forward to working with you guys!");


 
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(42.331429, -83.045753),
    zoom:9,
   
};
    
 
    
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
 marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 42.331429, lng: -83.045753}
     
  });
    
//    marker = new google.maps.Marker({
//    map: map,
//    draggable: true,
//    animation: google.maps.Animation.DROP,
//    position: {lat: 42.2048, lng: 83.4852}
//     
//  });
    
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
 
