Ext.define('MyApp.store.Features', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Main',
        'Ext.data.proxy.Memory',
        'Ext.util.Sorter'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                id: 1,
                title: 'Camera',
                viewName: 'CameraView'
            },
            {
                id: 2,
                title: 'Contacts',
                viewName: 'ContactsView'
            },
            {
                id: 3,
                title: 'Vibrator',
                viewName: 'VibratorView'
            },
            {
                id: 4,
                title: 'Capabilities',
                viewName: 'CapabilitiesView'
            }
        ],
        groupField: 'title',
        model: 'MyApp.model.Main',
        storeId: 'Features',
        proxy: {
            type: 'memory'
        },
        sorters: {
            property: 'title'
        }
    }
});