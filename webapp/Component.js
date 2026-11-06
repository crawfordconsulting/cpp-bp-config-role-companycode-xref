sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("cppbpcfgrolecocdxref.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                Component.prototype.init.apply(this, arguments);
                this.getRouter().navTo("BpConfigureRoleAllObjectPage", { key: "(1)" }, true);
            }

        });
    }
);