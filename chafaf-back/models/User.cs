using chafaf_back.models;
using System;
using System.Collections.Generic;

namespace chafaf_back.models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Roles { get; set; }

        public ICollection<Depenses> Depenses { get; set; }
        public ICollection<Dons> Dons { get; set; }
    }
}