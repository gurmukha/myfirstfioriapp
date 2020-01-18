sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ibm.fin.ar.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.fin.ar.view.View1
		 */
		//	onInit: function() {
		//
		//	},
		onNext: function(){
			//step 1: get the parent control of the page, app container
			var oApp = this.getView().getParent();
			//step 2: use the parent to navigate to view 2
			oApp.to("idView2");
		},
		onSearch: function(oEvent){
			//step 1: read the value which user type in search field
			var searchStr = oEvent.getParameter("query");
			//step 2: obtain the object of view 2
			var oApp = this.getView().getParent();
			var oView2 = oApp.getPages()[1];
			//step 3: obtain the page object which is inside view 2
			var oPage = oView2.getContent()[0];
			//step 4: change the title of the page
			oPage.setTitle(searchStr);
			//step 5: want to nav to next screen
			this.onNext();
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ibm.fin.ar.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ibm.fin.ar.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ibm.fin.ar.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});