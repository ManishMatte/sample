sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("createemployee.controller.create", {
            onInit: function () {

                const gModel = new sap.ui.model.json.JSONModel({
                    "payload":{
                    "name" : "",
                    "empid" : "",
                    "dob" : ""
                    }}
                )

                this.getView().setModel(gModel,"gModel");

            },
            onSubmit: function(){
                var gModel = this.getView().getModel("gModel");
                var oPayload = gModel.getProperty("/payload");
                var that = this;
                $.ajax({
                    type: "POST",
                    url: "/odata/v4/catalog/Employees",
                    data: JSON.stringify(oPayload),
                    success: function(response, statusText, xhrtoken){

                        MessageBox.success("Submitted Successfully");
                        var gModel = that.getView().getModel("gModel");
                        gModel.setProperty("/payload/name","");
                        gModel.setProperty("/payload/empid","");
                        gModel.setProperty("/payload/dob","");

                    },
                    contentType : "application/json"
                  });
            }
        });
    });
