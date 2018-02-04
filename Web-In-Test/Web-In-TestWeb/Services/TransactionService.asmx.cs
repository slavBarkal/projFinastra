using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Services;

namespace Web_In_TestWeb.Services
{
    /// <summary>
    /// Summary description for TransactionService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class TransactionService : System.Web.Services.WebService
    {

        [WebMethod]
        public string Get()
        {
            var client = new WebClient();
            return string.Empty;
        }
    }
}
