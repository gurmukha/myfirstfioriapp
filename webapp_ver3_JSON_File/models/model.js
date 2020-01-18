sap.ui.define(
		[],
		function(){
			return {
				createMyJSONModel: function(sPath){
					//Step 1: Create a brand new model object
					var oModel = new sap.ui.model.json.JSONModel();
					//Step 2: Set/Load the data
					//oModel.setData();
					//oModel.setDefaultBindingMode("OneWay");
					oModel.loadData(sPath);
					return oModel;
				}
				
			};	
});