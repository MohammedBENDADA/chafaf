using System.Threading.Tasks;
using System.Collections.Generic;
using chafaf_back.models;

using chafaf_back.Data;

using Microsoft.EntityFrameworkCore;

namespace chafaf_back.Data
{
    public class DepensesRepository : IDepensesRepository
    {
        private readonly DataContext _context;
        public DepensesRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T:class
        {
            _context.Add(entity);
        }
        public void Delete<T>(T entity) where T:class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.User.Include(p => p.Depenses).
            Include(q => q.Dons).FirstOrDefaultAsync(u => u.UserId == id);
            return user;
        }
         public async Task<bool> SaveAll(){
            return await _context.SaveChangesAsync() >0;
        }
        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.User.Include(p => p.Depenses).
            Include(q => q.Dons).ToListAsync();
            
            return users;
        }
        

 

        
    }
}