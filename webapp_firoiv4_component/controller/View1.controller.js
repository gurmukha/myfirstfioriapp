sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ibm/fin/ar/formatter/formatter"
], function(Controller, Formatter) {
	"use strict";

	return Controller.extend("ibm.fin.ar.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.fin.ar.view.View1
		 */
		formatter: Formatter,
		onInit: function() {
			//step 1: get the object of the UI control on which bindings needs to be done
			/*var oList = this.getView().byId("myFruitList");
			//Step 2: call the bind method to perform the binding
			oList.bindAggregation("items",{
				path: '/fruits'	,
				template: new sap.m.StandardListItem({
					title: "{name}",
					description:"{type}",
					icon: "{image}"
				})
			});*/
			this.oRouter = this.getOwnerComponent().getRouter();
		},
		onDelete: function(oEvent){
			//Step 1: Get the object of item on which delete was pressed
			var oItemToBeDeleted = oEvent.getParameter("listItem");
			//Step 2: get the object of the source control = list itself
			var oList = oEvent.getSource();
			//Step 3: Delete the item from the list of items
			oList.removeItem(oItemToBeDeleted);
		},
		onNext: function(){
			//step 1: get the parent control of the page, app container
			var oApp = this.getView().getParent().getParent();
			//step 2: use the parent to navigate to view 2
			oApp.to("idView2");
		},
		onItemPress: function(oEvent){
			
			this.oRouter.navTo("detail");
			
			//Step 1: Get the address of the selected element (/fruits/1)	
			var sPath = oEvent.getParameter("listItem").getBindingContextPath();
			//Step 2: get the object of the second view
			//var oView2 = this.getView().getParent().getPages()[1];
			var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
			//Step 3: Bind the whole element with whole of second
			oView2.bindElement(sPath);
			//this.onNext();
			
		},
		onSearch: function(oEvent){
			//step 1: read the value which user type in search field
			var searchStr = oEvent.getParameter("query");
			if(!searchStr){
				searchStr = oEvent.getParameter("newValue");
			}
			//Step 1: Get the object of the list control
			var oList = this.getView().byId("myList");
			//Step 2: contruct the filter expression 2 operands and 1 operator - Contains (not Equals)
			var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, searchStr);
			var oFilter1 = new sap.ui.model.Filter("type", sap.ui.model.FilterOperator.Contains, searchStr);
			var oFilterMain = new sap.ui.model.Filter({
				filters: [oFilter, oFilter1],
				and: false
			});
			//Step 3: Inject the filter inside items binding of the list
			oList.getBinding("items").filter([oFilterMain]);
			
			/*//step 2: obtain the object of view 2
			var oApp = this.getView().getParent();
			var oView2 = oApp.getPages()[1];
			//step 3: obtain the page object which is inside view 2
			var oPage = oView2.getContent()[0];
			//step 4: change the title of the page
			oPage.setTitle(searchStr);
			//step 5: want to nav to next screen
			this.onNext();*/
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