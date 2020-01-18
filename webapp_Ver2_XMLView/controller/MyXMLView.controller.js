sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("jerry.controller.MyXMLView", {
		
		wallah: function(){
			//Object of a UI5 Control?
			/// step 1: this - represents the controller object
			/// step 2: we can get the view object from the controller object this.getView()
			/// step 3; from the view object since control is direct child of view, we can call byId("controlId")
			var oPage = this.getView().byId("myPage");
			oPage.setTitle("Maza Aavigo");
			this.getView().byId("idBtn").setText("changed");
			window.open("http://www.onlinefioritrainings.com");
			alert("output is bound to come when you do things as per gold standards");
		},
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf jerry.view.MyXMLView
		 */
		onInit: function() {
			
			//Step 1: Create a brand new model object
				var oModel = new sap.ui.model.json.JSONModel();
			//Step 2: Set/Load the data
				oModel.setData({
								"empStr": {
									"empId": 100,
									"eName": "Anubhav",
									"salary": 90000,
									"currency": "INR"
								},
								"empTab": [{
										"empId": 201,
										"eName": "Sakshi",
										"salary": 25000,
										"currency": "INR"
									},
									{
										"empId": 202,
										"eName": "Sonam",
										"salary": 28000,
										"currency": "USD"
									},
									{
										"empId": 203,
										"eName": "Vandita",
										"salary": 30000,
										"currency": "INR"
									}
								]
							});
			//Step 3: Make the model aware to the app/view/control = app level 
				sap.ui.getCore().setModel(oModel);
			//Binding using JS code - 2 variations of doing same thing
			var oSal = this.getView().byId("idSal");
			var oCurr = this.getView().byId("idCurr");
			oSal.bindValue("/empStr/salary");
			oCurr.bindProperty("value","/empStr/currency");
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf jerry.view.MyXMLView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf jerry.view.MyXMLView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf jerry.view.MyXMLView
		 */
		//	onExit: function() {
		//
		//	}

	});

});