using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using DBComparator.Models;

namespace DBComparator.Controllers
{
    //[Authorize]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


        // GET api/values/model, calltype
        public IEnumerable<string> Get(DBModelClass model, string Calltype)
        {
            List<string> a = new List<string>();
            try
            {
                if (Calltype == "Database")
                {
                    string cs = "data source=" + model.serverName + "; database= master; user id=" + model.UserName + "; password=" + model.Password;
                    SqlConnection con = new SqlConnection(cs);
                    SqlCommand cmd = new SqlCommand("SELECT name FROM master.dbo.sysdatabases WHERE name NOT IN('master', 'tempdb', 'model', 'msdb'); ", con);
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        a.Add((dr["name"]).ToString());
                    }

                    return a;
                }
                if (Calltype == "Table")
                {
                    string cs = "data source=" + model.serverName + "; database=" + model.Database + "; user id=" + model.UserName + "; password=" + model.Password;
                    SqlConnection con = new SqlConnection(cs);
                    string q = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG = " + model.Database;
                    SqlCommand cmd = new SqlCommand(q, con);
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        a.Add((dr["TABLE_NAME"]).ToString());
                    }

                    return a;
                }
                if (Calltype == "Column")
                {
                    string cs = "data source=" + model.serverName + "; database=" + model.Database + "; user id=" + model.UserName + "; password=" + model.Password;
                    SqlConnection con = new SqlConnection(cs);
                    string q = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + model.TableName;
                    SqlCommand cmd = new SqlCommand(q, con);
                    con.Open();
                    SqlDataReader dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        a.Add((dr["COLUMN_NAME"]).ToString());
                    }

                    return a;
                }
                return a;
            }
            catch (Exception e)
            {
                return null;
            }
        }
        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
