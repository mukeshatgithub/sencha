Ext.define('MyApp.model.Contacts', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'displayName',
                type: 'string'
            }
        ]
    }
});