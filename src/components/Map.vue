<template lang="pug">
  .map#map
</template>

<script>
import GoogleMapsLoader from "google-maps";

export default {
  name: "Map",
  props: {},
  data() {
    return {
      markers: [
        {
          title: "Автодом",
          address: "Москва, Зорге 17",
          phone: "8 (495) 500-50-00",
          schedule: "Открыто 7:30—22:00",
          latitude: "55.7864375",
          longitude: "37.50868749999995",
          city: "Москва"
        },
        {
          title: "Rolls-Royce Motor Cars Moscow Service",
          address: "Москва, Вторая магистральная 18",
          phone: "8 (495) 500-50-00",
          schedule: "Открыто 7:30—22:00",
          latitude: "55.761841",
          longitude: "37.527525999999966",
          city: "Москва",
          center: "55.755826, 37.617299900000035"
        },
        {
          title: "Борисхоф",
          address: "Москва, Котельническая набережная 31",
          phone: "8 (495) 500-50-00",
          schedule: "Открыто 7:30—22:00",
          latitude: "55.7410936",
          longitude: "37.6463387",
          city: "Москва",
          center: "55.755826, 37.617299900000035"
        }
      ]
    };
  },
  computed: {
    currentCenter() {
      return this.markers[0].centerLat,this.markers[0].centerLng;
    },
  },
  mounted() {
    var GoogleMapsLoader = require("google-maps");
    GoogleMapsLoader.KEY = "AIzaSyBizcPfQ-Nb_K-oim7tyLQXbKfsQjKBW54";
    var mapCenter = this.currentCenter;

    GoogleMapsLoader.load(function(google) {
      var myMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: new google.maps.LatLng(mapCenter),
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#242f3e"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#746855"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#242f3e"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563"
              }
            ]
          },
          {
            featureType: "administrative.neighborhood",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#263c3f"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6b9a76"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#38414e"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#212a37"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9ca5b3"
              }
            ]
          },
          {
            featureType: "road.arterial",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#746855"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#1f2835"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#f3d19c"
              }
            ]
          },
          {
            featureType: "road.local",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#2f3948"
              }
            ]
          },
          {
            featureType: "transit.station",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#17263c"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#515c6d"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#17263c"
              }
            ]
          }
        ],
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        sensor: "true",
        disableDefaultUI: true,
        scrollwheel: false
      });

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.75809616667256, 37.57428078544153),
        map: myMap,
        labelClass: "labels",
        labelInBackground: true
      });

      var iw = new google.maps.InfoWindow({
        content:
          "<h4>Автодом</h4><p>Москва, Зорге 17</p><p>8 (495) 500-50-00</p><p>Открыто 7:30—22:00</p>"
      });
      google.maps.event.addListener(marker, "click", function() {
        iw.open(myMap, this);
      });
    });
  }
};
</script>

<style lang="scss">
@import "./styles/_colors";

.map {
  position: absolute;
  height: 100vh;
  width: 50%;
  top: 0;
  right: 0;

  h4 {
    font-family: Gilroy;
    line-height: normal;
    font-size: 24px;
    margin: 10px;
    color: #000d18;
  }

  p {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 16px;
    color: #3d4547;
    margin: 0 40px 0 10px;
  }

  p:last-of-type {
    margin-bottom: 15px;
  }
}
</style>
