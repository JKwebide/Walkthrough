sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"Walkthrough/model/models",
	"Walkthrough/controller/HelloDialog"
], function(UIComponent, Device, JSONModel, ResourceModel, models, HelloDialog) {
	"use strict";

	return UIComponent.extend("Walkthrough.Component", {

		metadata: {
			manifest: "json",
			rootView: "Walkthrough.view.App"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// set dialog
			this.helloDialog = new HelloDialog();
			
			// set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "Walkthrough.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		},

		exit : function () {
			this.helloDialog.destroy();
		}
	});

});