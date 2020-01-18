sap.ui.define(
			  ["sap/ui/core/format/NumberFormat"],
			  function(oNumberFormatter){
				return {
					
					convertToUpper: function(inp){
						return inp.toUpperCase();
					},
					joinCurrency: function(sal, curr){
						var oCurrFormatter = oNumberFormatter.getCurrencyInstance();
						return oCurrFormatter.format(sal,curr);
						//return sal + " " + curr;
					}
					
				};	
			  }
);