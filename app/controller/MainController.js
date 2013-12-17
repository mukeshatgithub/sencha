Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Main'
        ],
        stores: [
            'Features'
        ],

        refs: {
            mainView: 'mainview'
        },

        control: {
            "mainview #list": {
                select: 'view'
            }
			
        }
    },

    view: function(dataview, record, eOpts) {

        // Main navigation view
        var mainView = this.getMainView();
		
		//console.log(contactsList);
        // Navigate to details
        mainView.push({
            xtype: 'contactsList'
           // data: record.data
		   
	//	  
        });

    }

});