'use strict';

(function () {
    var getTransactionsUrl = "http://51.141.26.55/api/service-gpp-wrapper/elasticsearch/payments_by_cdtr?cdtr=Lobster%20Trapper%20Corporation";

    Office.initialize = function (reason) {
        $(document).ready(function () {
            $('#get-transaction').click(getTransaction);
        });
    };

    function getData(data) {
        console.log(data);
    }

    function getTransaction() {

        //Excel.run(function (context) {

        $.get(getTransactionsUrl,
            function (data, status) {
                getData(data);
            });
        //return context.sync();

        //}).catch(function (error) {
        //    console.log("Error: " + error);
        //    if (error instanceof OfficeExtension.Error) {
        //        console.log("Debug info: " + JSON.stringify(error.debugInfo));
        //    }
        //});
    }
})();