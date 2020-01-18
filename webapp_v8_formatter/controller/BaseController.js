sap.ui.define(
		["sap/ui/core/mvc/Controller"], 
		function(oController)
			{
				return oController.extend("jerry.controller.BaseController",{
					oCore: sap.ui.getCore(),
					_xyz : "anubhav",
					reuseFunctions: function(){
						this._privateFun();
						alert("chal gaya");
					},
					_privateFun: function(){
						
					}
				});	
			}
);