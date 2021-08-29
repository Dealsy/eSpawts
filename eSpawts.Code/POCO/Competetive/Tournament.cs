using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSpawts.Code.POCO.Competetive
{
    public class Tournament : DBRecord
    {
        public DateTime Created { get; set; }
        public Guid OwnerID { get; set; }
        public string Name { get; set; }
        public bool Retired { get; set; }

        public override void Create()
        {
            base.Create();
            using (var db = new Data.SQL.eSpawtsEntities())
            {
                Data.SQL.Tournament dbTrny = new Data.SQL.Tournament();

                Created = DateTime.UtcNow;

                DoMapping(this, dbTrny);

                db.Tournaments.Add(dbTrny);
                db.SaveChanges();
            }
        }
    }
}
