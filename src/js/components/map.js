class Map extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div id='map' style='width=400px; height:400px;'></div>
    `;

    google.maps.event.addDomListener(window, "load", init);
    function init() {
      let mapOptions = {
        zoom: 11,

        center: new google.maps.LatLng(40.67, -73.94),

        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ weight: "2.00" }],
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{ color: "#9c9c9c" }],
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#eeeeee" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7b7b7b" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#46bcec" }, { visibility: "on" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#c8d7d4" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#070707" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
        ],
      };
      let mapElement = document.querySelector("#map");
      let map = new google.maps.Map(mapElement, mapOptions);
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.67, -73.94),
        map: map,
        title: "Snazzy!",
      });
    }
    init();
  }
}

customElements.define("map-comp", Map);
