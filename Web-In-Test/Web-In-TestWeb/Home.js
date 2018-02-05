'use strict';

var getTransactionsUrl = "http://51.141.26.55/api/service-gpp-wrapper/elasticsearch/payments_by_cdtr?cdtr=Lobster%20Trapper%20Corporation";

const objTable = [
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "60 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 597,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA21A1747M3F0508",
            "CredDtTm": 1517480268672,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 597,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "60 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "60 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 597,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA21A1746L3F292R",
            "CredDtTm": 1517480267844,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 597,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "60 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "60 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 597,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA21A17455LF1M2M",
            "CredDtTm": 1517480267182,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 597,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "60 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "1 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 9.95,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA2102223L7E0O20",
            "CredDtTm": 1517444545209,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 9.95,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "1 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "31 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 308.45,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA1VD3547NAE1R27",
            "CredDtTm": 1517417053550,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 308.45,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "31 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "RJCT",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "97 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 965.15,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA1VG40314TE270U",
            "CredDtTm": 1517416832383,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 965.15,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "97 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "22 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 218.89999999999998,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA1UA2857FLE1R02",
            "CredDtTm": 1517323097977,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 218.89999999999998,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "22 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "RJCT",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "36 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 358.2,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA1UE3643J8E0O1C",
            "CredDtTm": 1517323004506,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 358.2,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "36 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "22 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 218.89999999999998,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA1UE20401QE2703",
            "CredDtTm": 1517322041528,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 218.89999999999998,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "22 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "PDNG",
            "executionDt": null
        }
    },
    {
        "pmtInfCdtTrfTxPmtIdInstrId": "20 Lobsters $9.95 e/o",
        "pmtInfCdtTrfTxAmtInstdAmt": 199,
        "transactionStatus": null,
        "id": null,
        "GrpHdr": {
            "MsgId": "IA1U94549DOE151F",
            "CredDtTm": 1517305980766,
            "NbOfTxs": null,
            "InitgPty": null
        },
        "PmtInf": {
            "PmtInfId": null,
            "PmtInfRscId": null,
            "PmtMtd": null,
            "PmtTpInf": null,
            "ReqdExctnDt": null,
            "Dbtr": {
                "Nm": "The Lobster Shack at Two Lights",
                "PstlAdr": null,
                "Id": null,
                "CtctDtls": null
            },
            "DbtrAcct": null,
            "Cdtr": null,
            "CdtrAcct": null,
            "DbtrAgt": null,
            "ChrgBr": null,
            "CdtTrfTx": [
                {
                    "PmtId": null,
                    "Amt": {
                        "InstdAmt": 199,
                        "Ccy": null
                    },
                    "CdtrAgt": null,
                    "Cdtr": {
                        "Nm": "Lobster Trapper CO.",
                        "PstlAdr": null,
                        "Id": null,
                        "CtctDtls": null
                    },
                    "CdtrAcct": null,
                    "UltmtCdtr": null,
                    "Purp": null,
                    "RmtInf": {
                        "Ustrd": [
                            "20 Lobsters $9.95 e/o"
                        ]
                    }
                }
            ]
        },
        "SplmtryData": null,
        "TransactionStatus": null,
        "ExtTransactionStatus": {
            "extrnSts": "RJCT",
            "executionDt": null
        }
    }
]

//Office.initialize = function (reason) {
//    $(document).ready(function () {
//        $('#get-transaction').click(getTransaction);
//    });
//};


var getTransaction = function() {

    //$.ajax({
    //    url: "/WebServiceAPI.asmx/GetTransaction",
    //    method: "POST"

    //}).done(function (data) {
    //    console.log(data);
    //}).fail(function (err) {
    //    console.log(err);
    //})

    //Excel.run(function (ctx) {
    //    var table = ctx.workbook.tables.add('Sheet1!A1:E7', true);
    //    table.load('name');
    //    return ctx.sync().then(function () {
    //        console.log(table.name);
    //    });
    //}).catch(function (error) {
    //    console.log("Error: " + error);
    //    if (error instanceof OfficeExtension.Error) {
    //        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    //    }
    //});


    Excel.run(function (context) {
        //var sheet = context.workbook.worksheets.getItem("Sample");
        //var expensesTable = sheet.tables.add("A1:I1", true /*hasHeaders*/);
        //expensesTable.name = "ExpensesTable";

        var tableExcel = context.workbook.tables.add('Sheet1!A1:I10', true);

        tableExcel.getHeaderRowRange().values = [["Message ID", "Create date", "Debtor name", "Debtor", "Creditor name", "Amount", "Currency", "Remittance information", "Transaction Status"]];

        var table = [];

        //for (let obj of objTable) {
        for (var i = 0; i < objTable.length; i++) {
            var obj = objTable[i] || "";
            var msId = obj.GrpHdr.MsgId || "";
            var date = "1/16/2017";//new Date(obj.GrpHdr.CredDtTm).toDateString();
            var debtorNm = obj.PmtInf.Dbtr.Nm || "";
            var debtor = obj.PmtInf.DbtrAcct || "";
            var CreditorNm = obj.PmtInf.Cdtr != null ? obj.PmtInf.Cdtr.Nm : "";
            var amount = obj.PmtInf.CdtTrfTx[0].Amt.InstdAmt || "";
            var Currency = obj.PmtInf.CdtTrfTx[0].Amt.Ccy || "";
            var RemInfo = obj.PmtInf.CdtTrfTx[0].RmtInf.Ustrd || "";
            var transSts = obj.ExtTransactionStatus.extrnSts || "";

            var arr = [msId, date, debtorNm, debtor, CreditorNm, amount, Currency, RemInfo, transSts];
            table.push(arr);

        }

        tableExcel.rows.add(null /*add rows to the end of the table*/, [
            ["1/16/2017", "THE PHONE COMPANY", "Communications", "$120"],
            ["1/20/2017", "NORTHWIND ELECTRIC CARS", "Transportation", "$142"],
            ["1/20/2017", "BEST FOR YOU ORGANICS COMPANY", "Groceries", "$27"],
            ["1/21/2017", "COHO VINEYARD", "Restaurant", "$33"],
            ["1/25/2017", "BELLOWS COLLEGE", "Education", "$350"],
            ["1/28/2017", "TREY RESEARCH", "Other", "$135"],
            ["1/31/2017", "BEST FOR YOU ORGANICS COMPANY", "Groceries", "$97"]
        ]);

        //if (Office.context.requirements.isSetSupported("ExcelApi", 1.2)) {
        //    sheet.getUsedRange().format.autofitColumns();
        //    sheet.getUsedRange().format.autofitRows();
        //}

        //sheet.activate();

        return context.sync();
    }).catch(function (err) {
        console.log(err);
    });

}