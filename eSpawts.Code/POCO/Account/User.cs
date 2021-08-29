using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSpawts.Code.POCO.Account
{
    public class User : DBRecord
    {
        public string NickName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public DateTime Created { get; set; }
        public override void Create()
        {
            base.Create();
            using (var db = new Data.SQL.eSpawtsEntities())
            {
                Data.SQL.User dbUser = new Data.SQL.User();

                Created = DateTime.UtcNow;
                dbUser.PasswordHash = Encoding.UTF8.GetBytes(Password);

                DoMapping(this, dbUser);

                db.Users.Add(dbUser);
                db.SaveChanges();
            }
        }

        public static bool Login(string email, string Password)
        {
            using (var db = new Data.SQL.eSpawtsEntities())
            {
                var usr = db.Users.Where(r => r.EmailAddress == email).SingleOrDefault();
                if(usr == null)
                {
                    throw new ArgumentException("Associated user record was not found", "EmailAddress");
                }

                return Password == Encoding.UTF8.GetString(usr.PasswordHash);
            }            
        }

        // 'new' as covariant return support not yet current
        public static new User[] Retrieve()
        {

            using (var db = new Data.SQL.eSpawtsEntities())
            {
                var result = new List<User>();
                foreach(var dbUser in db.Users)
                {
                    var usr = new User();
                    usr.DoMapping(dbUser, usr);
                    result.Add(usr);
                }

                return result.ToArray();
            }
        }


        public override void Delete()
        {
            using (var db = new Data.SQL.eSpawtsEntities())
            {
                base.Delete();

                var dbRecord = db.Users.Where(r => r.ID == ID).SingleOrDefault();
                if (dbRecord == null)
                {
                    throw new Exception("Record with ID '" + ID + "' was not found. Was it already deleted?" );
                }

                db.Users.Remove(dbRecord);
                db.SaveChanges();
            }
        }

        public override void Update()
        {
            base.Update();

            using (var db = new Data.SQL.eSpawtsEntities())
            {
                var dbRecord = db.Users.Where(r => r.ID == ID).SingleOrDefault();

                if (dbRecord == null)
                {
                    throw new Exception("Record with ID " + ID + " was not found. Was it deleted?");
                }

                if(dbRecord.PasswordHash == null)
                {
                    dbRecord.PasswordHash = new byte[0];
                }

                if(Password != null)
                {
                    dbRecord.PasswordHash = Encoding.UTF8.GetBytes(Password);
                }

                DoMapping(this, dbRecord);

                db.SaveChanges();
            }
        }

        public override void GetByID(Guid ID)
        {
            base.GetByID(ID);

            using (var db = new Data.SQL.eSpawtsEntities())
            {
                var dbResult = db.Users.Where(r => r.ID == ID).SingleOrDefault();

                DoMapping(dbResult, this);
            }
        }
    }
}
