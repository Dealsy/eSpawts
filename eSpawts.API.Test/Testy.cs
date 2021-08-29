using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSpawts.API.Test
{
    public static class Testy
    {
        public static void HandleDbEntityValidationException(
            System.Data.Entity.Validation.DbEntityValidationException e)
        {
            Console.WriteLine("DbEntityValidationException errors from EF");
            foreach (var ev in e.EntityValidationErrors)
            {
                foreach (var v in ev.ValidationErrors)
                {
                    Console.WriteLine("[" + v.PropertyName + "] - " + v.ErrorMessage);
                }
            }
        }
    }
}
