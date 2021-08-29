using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.Json;
using System.Threading;
using System.Data.Entity.Validation;

namespace eSpawts.API.Account
{
    public partial class User : System.Web.UI.Page
    {
        string data;

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                data = Request["data"];

                if (data == null && Request["op"] != null)
                {
                    throw new Exception("Please provide data for the " + Request["op"] + " payload");
                }

                switch (Request["op"])
                {
                    case "login":
                        {
                            var email = Request["Email"];
                            var password = Request["Password"];

                            if(Code.POCO.Account.User.Login(email, password))
                            { 
                                Response.Write(new Envelope() { Result = true, Data = "Login Successful." });
                            }
                            else
                            {
                                Response.Write(new Envelope() { Result = false, Data = "Login Failed. Please check credentials." });
                            }

                            break;
                        }
                    case "get":
                        {
                            Code.POCO.Account.User usr = null;
                            try
                            {
                                usr = JsonSerializer.Deserialize<Code.POCO.Account.User>(data);
                            }
                            catch
                            {
                                usr.ID = new Guid(data);
                            }

                            usr.GetByID(usr.ID);
                            Response.Write(new Envelope() { Data = usr });
                            Response.End();
                            break;
                        }
                    case "create":
                        {
                            var usr = JsonSerializer.Deserialize<Code.POCO.Account.User>(data);
                            if (usr.Password == null || usr.Password == "")
                            {
                                throw new ArgumentException("This field is required.", "Password");
                            }
                            usr.Create();
                            Response.Write(new Envelope() { Data = usr });
                            Response.End();
                            break;
                        }
                    case "retrieve":
                        {
                            var usr = new Code.POCO.Account.User();
                            usr.GetByID(new Guid(data));
                            Response.Write(new Envelope() { Data = usr });
                            Response.End();
                            break;
                        }
                    case "update":
                        {
                            var usr = JsonSerializer.Deserialize<Code.POCO.Account.User>(data);
                            usr.Update();
                            Response.Write(new Envelope() { Data = usr });
                            Response.End();
                            break;
                        }
                    case "delete":
                        {
                            var usr = new Code.POCO.Account.User();
                            try
                            {
                                usr = JsonSerializer.Deserialize<Code.POCO.Account.User>(data);
                            }
                            catch
                            {
                                usr.ID = new Guid(data);
                            }

                            usr.Delete();
                            Response.Write(new Envelope());
                            Response.End();
                            break;
                        }


                    // Default call, list all available
                    case "":
                    case null:
                        string json = JsonSerializer.Serialize(Code.POCO.Account.User.Retrieve());
                        Response.Write(json);
                        Response.End();
                        break;
                }
            }
            catch (DbEntityValidationException dbE)
            {
                var err = "";

                foreach (var eve in dbE.EntityValidationErrors)
                {
                    err += string.Format("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);

                    foreach (var ve in eve.ValidationErrors)
                    {
                        err += string.Format("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }

                Response.Write(new Envelope() { Data = err, Result = false });
                Response.End();
            }
            catch (ThreadAbortException)
            {

            }
            catch (Exception ex)
            {
                Response.Write(new Envelope() { Data = ex.Message, Result = false });
                Response.End();
            }
        }
    }
}