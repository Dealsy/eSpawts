using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSpawts.Code.POCO
{
    public class Mapper
    {
        public static MapperConfiguration config = null;
        public static void Initialise()
        {
            if (config == null)
            {
                config = new MapperConfiguration(cfg =>
                {
                    cfg.CreateMap<Account.User, Data.SQL.User>();
                    cfg.CreateMap<Competetive.Tournament, Data.SQL.Tournament>();
                    
                    cfg.CreateMap<Data.SQL.User, Account.User>();
                    cfg.CreateMap<Data.SQL.Tournament, Competetive.Tournament>();
                });
            }
        }
    }
}
