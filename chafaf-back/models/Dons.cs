using System;

using System.Text.Json.Serialization;

namespace chafaf_back.models
{
    public class Dons
    {
        
        public int Id { get; set; }
        public string name { get; set; }
        public string Type { get; set; }
        public string MyProperty { get; set; }
        public long Prix { get; set; }
        public DateTime  DateToday { get; set; }

        [JsonIgnore]
        public User User { get; set; }
        public int UserId { get; set; }
        
    }
}