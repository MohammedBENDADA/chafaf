using System;
using System.ComponentModel.DataAnnotations;

namespace chafaf_back.Dtos
{
    public class UpdateDonsDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string MyProperty { get; set; }

        [Required]
        public long Prix { get; set; }

        [Required]
        public DateTime  DateToday { get; set; }
        public int UserId { get; set; }
    }
}