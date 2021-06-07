/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"azure/odata/cosmos/example/cosmosumbrella/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
