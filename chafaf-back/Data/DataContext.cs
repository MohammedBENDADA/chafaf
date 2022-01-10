using chafaf_back.models;
using Microsoft.EntityFrameworkCore;
namespace chafaf_back.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}
        
        public DbSet<User> User { get; set;}
        public DbSet<Depenses> Depenses { get; set; }
        public DbSet<Dons> Dons  { get; set; }
    }
}