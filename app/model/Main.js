

Ext.define('MyApp.model.Main', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'viewName',
                type: 'string'
            }
        ]
    }
});