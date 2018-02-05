using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Services;

namespace Web_In_TestWeb
{
    /// <summary>
    /// Summary description for WebServiceAPI
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class WebServiceAPI : System.Web.Services.WebService
    {

        //public WebServiceAPI()
        //{
        //    ServicePointManager.SecurityProtocol = SecurityProtocolType.Ssl3 | SecurityProtocolType.Tls;
        //}

        [WebMethod]
        public void GetTransaction()
        {
            var result = "";
            
            var requestUri = "http://51.141.26.55/api/service-gpp-wrapper/elasticsearch/payments_by_cdtr?cdtr=Lobster%20Trapper%20Corporation";

            var request = WebRequest.Create(requestUri) as HttpWebRequest;
            request.Method = "GET";
            
            HttpWebResponse response = request.GetResponse() as HttpWebResponse;

            using (var streamReader = new StreamReader(response.GetResponseStream()))
            {
                result = streamReader.ReadToEnd();
            }

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.AddHeader("content-length", result.Length.ToString());
            Context.Response.Flush();

            Context.Response.Write(result);
        }


        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
