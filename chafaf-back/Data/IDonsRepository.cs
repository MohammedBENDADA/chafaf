using System.Threading.Tasks;
using System.Collections.Generic;
using chafaf_back.models;

namespace chafaf_back.Data
{
    public interface IDonsRepository
    {
         void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T:class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}