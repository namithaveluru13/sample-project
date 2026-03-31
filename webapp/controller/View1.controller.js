sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("navigate.controller.View1", {

        // ================= INIT =================
        onInit: function () {
            var oView = this.getView();

            var sImagePath = sap.ui.require.toUrl("navigate/image1/computer.jpeg");
            oView.byId("myImage").setSrc(sImagePath);

            oView.byId("footerBar").setVisible(false);
        },

        // ================= IMAGE =================
        onShowImage: function () {
            var oView = this.getView();
            var sImagePath = sap.ui.require.toUrl("navigate/image1/computer.jpeg");

            oView.byId("imageContainer").setVisible(true);
            oView.byId("mainContent").setVisible(false);
            oView.byId("formContainer").setVisible(false);
            oView.byId("footerBar").setVisible(false);

            oView.byId("myImage").setSrc(sImagePath);
        },

        onCloseImage: function () {
            var oView = this.getView();
            oView.byId("imageContainer").setVisible(false);
            oView.byId("mainContent").setVisible(true);
        },

        onNavBack: function () {
            var oView = this.getView();
            oView.byId("imageContainer").setVisible(false);
            oView.byId("mainContent").setVisible(true);
        },

        // ================= FORM =================
        onShowForm: function () {
            var oView = this.getView();

            oView.byId("formContainer").setVisible(true);
            oView.byId("mainContent").setVisible(false);
            oView.byId("imageContainer").setVisible(false);
            oView.byId("footerBar").setVisible(true);
        },

        // ================= SUBMIT =================
        onSubmitForm: function () {
            var oView = this.getView();

            var name = oView.byId("name").getValue();
            var id = oView.byId("id").getValue();
            var role = oView.byId("role").getValue();
            var mobile = oView.byId("mobile").getValue();

            if (!name || !id || !role || !mobile) {
                MessageToast.show("Please fill all fields");
                return;
            }

            // Hide everything
            oView.byId("mainContent").setVisible(false);
            oView.byId("formContainer").setVisible(false);
            oView.byId("imageContainer").setVisible(false);
            oView.byId("footerBar").setVisible(false);

            // Show success
            oView.byId("successPage").setVisible(true);

            // Clear form
            oView.byId("name").setValue("");
            oView.byId("id").setValue("");
            oView.byId("role").setValue("");
            oView.byId("mobile").setValue("");
        },

        // ================= RESUBMIT =================
        onResubmit: function () {
            var oView = this.getView();

            oView.byId("successPage").setVisible(false);
            oView.byId("mainContent").setVisible(true);
            oView.byId("formContainer").setVisible(true);
            oView.byId("footerBar").setVisible(true);
        },

        // ================= CANCEL =================
        onCancel: function () {
            var oView = this.getView();

            var name = oView.byId("name").getValue();
            var id = oView.byId("id").getValue();
            var role = oView.byId("role").getValue();
            var mobile = oView.byId("mobile").getValue();

            if (name || id || role || mobile) {

                oView.byId("name").setValue("");
                oView.byId("id").setValue("");
                oView.byId("role").setValue("");
                oView.byId("mobile").setValue("");

                MessageToast.show("Changes are not saved ❌");
            } else {
                MessageToast.show("Nothing to clear");
            }
        }

    });
});