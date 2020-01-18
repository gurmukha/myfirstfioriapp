sap.ui.jsview("jerry.view.Main",{
	getControllerName: function(){
		return "jerry.controller.Main";	
	},
	createContent: function(oController){
		///What will be address of our Main view --> jerry.views.Main - namespace 
	  		//it is an aliasname/address of the root directory inwhich all resources are place.....
	  		var oInp = new sap.m.Input("idANubhav");
	  		
	  		var oBtn = new sap.m.Button("idAnubhav",{
	  			text: "Click me",
	  			type: sap.m.ButtonType.Accept,
	  			press: oController.zumba
	  		});
	  		var oBtn2 = new sap.m.Button("idAnubhav2",{
	  			text: "Click me 2",
	  			type: sap.m.ButtonType.Accept,
	  			press: oController.zumba
	  		});	  		
	  		//oBtn.attachPress();
	  		oBtn.setText("Joker");
	  		oBtn2.setText("Joker2");	  		
			return [oInp,oBtn,oBtn2];
	}
});