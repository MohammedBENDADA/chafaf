using System;
using System.ComponentModel.DataAnnotations;

namespace chafaf_back.Dtos
{
    public class CreateDonsDto
    {
         public int Id { get; set; }
        public string name { get; set; }
        public string Type { get; set; }
        public string MyProperty { get; set; }
        public long Prix { get; set; }
        public DateTime  DateToday { get; set; }
        public int UserId { get; set; }
    }
}