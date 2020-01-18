sap.ui.define(
				["sap/ui/core/mvc/Controller"],
				function(Controller){
					//Standard way of creating any controller (custom) in SAP UI5 projects
					//SAP recommends to create your controller by inherting from standard controller class
					return Controller.extend("jerry.controller.Second",{
						//constructor of your class (Second controller)
						onInit: function(){
							console.log("contructor called after controller was initialized");
						}
					});
				}
);