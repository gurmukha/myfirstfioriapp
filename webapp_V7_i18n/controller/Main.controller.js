sap.ui.define(
				["jerry/controller/BaseController"],
				function(Controller){
					//Standard way of creating any controller (custom) in SAP UI5 projects
					//SAP recommends to create your controller by inherting from standard controller class
					return Controller.extend("jerry.controller.Main",{
						//constructor of your class (Main controller)
						onInit: function(){
							console.log("contructor called after controller was initialized");
						},
						zumba: function(){
							//how to obtain object of a UI5 control?
							var oInp = sap.ui.getCore().byId("idANubhav");
							alert(oInp.getValue());
			  				this.setType("Reject");
			  				this.setEnabled(false);
						}
					});
				}
);