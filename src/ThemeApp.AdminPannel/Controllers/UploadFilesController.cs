using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ThemeApp.AdminPannel.Controllers
{
    [Route("api/[controller]")]
    public class UploadFilesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "ravi", "mishra" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }


        private IHostingEnvironment hostingEnv;

        public UploadFilesController(IHostingEnvironment env)
        {
            this.hostingEnv = env;
        }
        // POST api/values
        //[HttpPost]
        //public HttpResponseMessage AttachFile()
        //{
        //    HttpResponseMessage result = null;
        //    //var httpRequest= ;
        //    //if (httpRequest.Files.Count > 0)
        //    //{
        //    //    var docfiles = new List<string>();
        //    //    foreach (string file in httpRequest.Files)
        //    //    {
        //    //    }
                
        //    //}
        //    //else
        //    //{
               
        //    //}
        //    return result;
        //}

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
