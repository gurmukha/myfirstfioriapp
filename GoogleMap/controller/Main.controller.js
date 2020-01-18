sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("accenture.mapgoogleMaps.controller.Main", {
		oMap:null,
		onAfterRendering: function(){
			if(!this.oMap){
				this.oMap = new google.maps.Map(document.getElementById('anubhavmap'),{
					center: {
						lat: 28.7041,
						lng: 77.1025
					},
					zoom: 12
				});
			}
		},
		onSearch: function(oEvent){
			var searchLoc = oEvent.getParameter("query");
			sap.ui.require(["sap/m/MessageToast"], function(MessageToast){
				MessageToast.show("You have searched for " + searchLoc);	
			});
			var geoCoder = new google.maps.Geocoder();
			var that = this;
			geoCoder.geocode({'placeId': searchLoc},function(results, status) {
		      if (status !== 'OK') {
		        window.alert('Geocoder failed due to: ' + status);
		        return;
		      }
		      that.oMap.setZoom(11);
		      that.oMap.setCenter(results[0].geometry.location);
		      var marker = new google.maps.Marker({
			    position: results[0].geometry.location,
			    map: that.oMap,
			    title: searchLoc
			  });
			});
		}
	});
});