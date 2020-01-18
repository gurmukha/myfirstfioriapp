sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("ibm.fin.ar.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.fin.ar.view.View2
		 */
		//	onInit: function() {
		//
		//	},
		onBack: function(){
			//Step 1: Get the parent object 
			var oApp = this.getView().getParent();
			//Step 2: parent will ask the view 1 to load
			oApp.to("idView1");
		},
		locationOfHoliday: "Singapore",
		onApprove: function(){
			//alert(this.locationOfHoliday);
			var that = this;
			MessageBox.confirm("Are you sure, you wanna me go for vacation?",{
				title: "Yo Yo Holiday",
				onClose: this.afterMsgClose.bind(this)
			});
		},
		afterMsgClose: function(response){
			//will show later
			if(response === "OK"){
				MessageToast.show("Wallah! your vacation is now approved location " + this.locationOfHoliday);
			}
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ibm.fin.ar.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ibm.fin.ar.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ibm.fin.ar.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});