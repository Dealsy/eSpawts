using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace eSpawts.API
{
    public class Envelope
    {
        public bool Result = true;
        public object Data;

        public override string ToString()
        {
            return JsonSerializer.Serialize(this, new JsonSerializerOptions() { IncludeFields = true });
        }
    }
}
