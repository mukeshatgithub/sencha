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
		
		var featureName = record.data.viewName;
		var viewName = '';
		
		switch (featureName)
		{
		case 'CameraView':
		  viewName = 'cameraView';
		  break;
		case 'ContactsView':
	 	   viewName = 'contactsList';
	  	 break;
		case 'VibratorView':
 	   	 viewName = 'vibratorView';
		 break;
		case 'CapabilitiesView':
   			viewName = 'CapabilitiesView';
		 break;
		 
		default:
		  //do nothing
		}

        mainView.push({
            xtype: viewName
        });

    }

});
