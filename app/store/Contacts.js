Ext.define('MyApp.store.Contacts', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Contacts'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                displayName: 'Loading...'
            }
        ],
        model: 'MyApp.model.Contacts',
        storeId: 'Contacts',
		grouper: {
		                groupFn: function(record) 
						{
		                    return record.get('displayName')[0];
		                }
				}
    }
});