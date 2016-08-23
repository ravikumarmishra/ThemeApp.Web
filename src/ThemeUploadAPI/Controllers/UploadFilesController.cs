using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace ThemeUploadAPI.Controllers
{
    [Route("api/[controller]")]
    public class UploadFilesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        private IHostingEnvironment hostingEnv;

        public UploadFilesController(IHostingEnvironment env)
        {
            this.hostingEnv = env;
        }
        // POST api/values
        [HttpPost]
        public string UploadFiles(string name, ICollection<IFormFile> file1, ICollection<IFormFile> file2)
        {
            long size = 0;
            string fname = "";
          //  var files = Request.Form.Files;
            foreach (var file in file1)
            {
                var filename = ContentDispositionHeaderValue
                                .Parse(file.ContentDisposition)
                                .FileName
                                .Trim('"');
                filename = hostingEnv.WebRootPath + $@"\{filename}";

                size += file.Length;
                using (FileStream fs = System.IO.File.Create(filename))
                {
                    file.CopyTo(fs);
                    fs.Flush();
                }
                fname = filename;
            }
            string message = $"{file1.Count} file(s) / { size} bytes uploaded successfully!";
            return message;
        }

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
