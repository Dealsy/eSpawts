using eSpawts.Code.POCO;
using eSpawts.Code.POCO.Account;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;

namespace eSpawts.API.Test.Account
{
    [TestClass]
    public class UserTests
    {
        [TestMethod]
        public void CRUD()
        {
            try
            {
                Mapper.Initialise();

                var usr = new User();
                usr.EmailAddress = "bollocks@none.com";
                usr.NickName = "Borrox";
                usr.Password = "harrybarry";

                usr.Create();

                usr.NickName = "harold";
                usr.Update();

                // test password stuff
                if(!User.Login(usr.EmailAddress, usr.Password))
                {
                    throw new Exception("Login failed for harold");
                }

                if (User.Login(usr.EmailAddress, usr.Password + "lel"))
                {
                    throw new Exception("Login un-failed for harold");
                }

                var results = User.Retrieve();

                var usrT = new User();
                usrT.GetByID(results.First().ID);

                usr.Delete();
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException e)
            {
                Testy.HandleDbEntityValidationException(e);
                throw e;
            }
        }
    }
}
