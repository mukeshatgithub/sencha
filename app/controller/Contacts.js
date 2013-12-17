Ext.define('MyApp.controller.Contacts', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Contacts'
        ],
        stores: [
            'Contacts'
        ],
        refs: {
            contactsList: 'contactsList'
      	  	},
			control:
			{
				contactsList:{
					loadContacts:'loadDeviceContacts'
				}
			}
       },
	   loadDeviceContacts:function()
	   {
		   
		   var options = new ContactFindOptions();
		   options.filter = "";      // empty search string returns all contacts
		   options.multiple = true;  // return multiple results
		   filter = ["displayName"]; // return contact.displayName field
		   navigator.contacts.find(filter, onSuccess, onError, options);
		   
		   function onSuccess(contacts) 
		   {
			   var contactsStore = Ext.getStore('Contacts');
			    contactsStore.removeAll();
			 	for (var i=0; i<contacts.length; i++) 
				{
		 		   var newContact = { displayName: contacts[i].displayName};
		 		   contactsStore.add(newContact);
		  	    }
		  };
		  
		  function onError(contactError) 
		  {
		       console.log('onError!');
		  }
	   }
});