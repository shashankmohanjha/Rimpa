using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DBComparator.Models
{
    public class DBModelClass
    {
        public string serverName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Database { get; set; }
        public string TableName { get; set; }
        public List<string> Column { get; set; }

    }
}