using System;
using System.ComponentModel.DataAnnotations;

namespace chafaf_back.Dtos
{
    public class CreateDepensesDto
    {
        [Required]
        public int DepensesId { get; set; }

        [Required]
        public string name { get; set; }

        [Required] 
        public string type  { get; set; }

        [Required]
        public long prix { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public int UserId { get; set; }
        
    }
}