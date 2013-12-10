/*
 * File: app/controller/People.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.People', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Person'
        ],
        stores: [
            'People'
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

        // Navigate to details
        mainView.push({
            xtype: 'cameraView',
            title: "Details",
            data: record.data
        });

    }

});