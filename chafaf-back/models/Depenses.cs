using System;

using System.Text.Json;
using System.Text.Json.Serialization;

namespace chafaf_back.models
{
    public class Depenses
    {
        public int DepensesId { get; set; }
        public string name { get; set; }
        public string type  { get; set; }
        public long prix { get; set; }
        public DateTime Date { get; set; }
        
       
        [JsonIgnore]
        public User User { get; set; }
        public int UserId { get; set; }
        
        
   
        
        
      
    }
}
