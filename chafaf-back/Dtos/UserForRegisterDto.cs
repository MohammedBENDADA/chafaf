using System.ComponentModel.DataAnnotations;
namespace chafaf_back.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength =4, ErrorMessage ="you must specify password betwen 4 and 8 caracters")]
        public string Password { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Roles { get; set; }
        
        
    }
}