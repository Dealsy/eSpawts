using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eSpawts.Code.POCO
{
    public class DBRecord
    {
        public Guid ID { get; set; }

        public DBRecord()
        {
            ID = new Guid();
        }

        void VerifyCreationRecord()
        {
            // New record
            if (ID != new Guid())
            {
                throw new Exception("Record already contains a generated GUID, " +
                    "records for Creation must use GUID {00000000-0000-0000-0000-000000000000} as ID");
            }
        }

        internal void DoMapping<TSource, TDestination>(TSource mapFrom, TDestination mapTo) 
        {
            var mapper = Mapper.config.CreateMapper();
            mapper.Map(mapFrom,mapTo);
        }

        public virtual void Create()
        {
            VerifyCreationRecord();
            ID = Guid.NewGuid();
        }
        public virtual DBRecord[] Retrieve()
        {
            return null;
        }
        public virtual void Update()
        {
        }
        public virtual void Delete()
        {
        }
        public virtual void GetByID(Guid ID)
        {
        }
    }
}
