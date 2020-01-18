sap.ui.jsview("accenture.mapgoogleMaps.view.Main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Main
	 */
	getControllerName: function() {
		return "accenture.mapgoogleMaps.controller.Main";
	},
	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Main
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Google Map Integration",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		
		sap.ui.core.Control.extend("googleMap",{
			metadata: {},
			init:function(){},
			renderer: function(oRm,oControl){
				oRm.write("<div id='anubhavmap' style='width:90%;height:450px;border:3px solid red'></div>");
			}
		});
		
		var oSearch = new sap.m.SearchField("idSearch",{
			search: [oController.onSearch, oController]	
		});
		var oGmap = new googleMap();
		oPage.addContent(oSearch);
		oPage.addContent(oGmap);
		
		app.addPage(oPage);
		return app;
	}
	

});