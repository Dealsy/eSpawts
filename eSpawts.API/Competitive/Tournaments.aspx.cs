using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace eSpawts.API.Competitive
{
    public partial class Tournaments : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var results = new List<eSpawts.Code.POCO.Competetive.Tournament>();

            results.Add(new Code.POCO.Competetive.Tournament()
            {
                Created = DateTime.Now.AddDays(-3),
                ID = Guid.NewGuid(),
                OwnerID = Guid.NewGuid(),
                Name = "The Grand Tournament of Oz the Powerful"
            });

            results.Add(new Code.POCO.Competetive.Tournament()
            {
                Created = DateTime.Now,
                ID = Guid.NewGuid(),
                OwnerID = Guid.NewGuid(),
                Name = "The Disturbing Tournament of Dealsy the Enforcer"
            });

            Response.Write(
                JsonSerializer.Serialize(
                    results,
                    results.GetType(),
                    new JsonSerializerOptions() { IncludeFields = true, IgnoreReadOnlyProperties = false }
                ));
            Response.End();

        }
    }
}