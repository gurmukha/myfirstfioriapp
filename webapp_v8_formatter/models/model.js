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
				},
				createMyXMLModel: function(sPath){
					//Step 1: Create a brand new model object
					var oModel = new sap.ui.model.xml.XMLModel();
					//Step 2: Set/Load the data
					//oModel.setData();
					//oModel.setDefaultBindingMode("OneWay");
					oModel.loadData(sPath);
					return oModel;
				},
				createResourceModel: function(){
					var oResource = new sap.ui.model.resource.ResourceModel({
						bundleUrl : "i18n/i18n.properties"
					});
					return oResource;
					
				}
			};	
});