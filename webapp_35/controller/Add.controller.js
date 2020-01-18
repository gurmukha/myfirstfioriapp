sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("ibm.fin.ar.controller.Add", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.fin.ar.view.View2
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis, this);
		},
		herculis: function(oEvent){
			
		},
		onBack: function(){
			//Step 1: Get the parent object 
			var oApp = this.getView().getParent();
			//Step 2: parent will ask the view 1 to load
			oApp.to("idView1");
		},
		onSave: function(oEvent){
			//MessageBox.alert("This functionality is under construction, please check later");
			var payload = this.getView().getModel("anubhavModel").getProperty("/productData");
			var oDataModel = this.getView().getModel();
			oDataModel.create("/ProductSet", payload,{
				success: function(oData){
					MessageToast.show("Wallah!! Anubhav it worked when i did things right");
				},
				error: function(oError){
					
				}
			});
			
		}

	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});