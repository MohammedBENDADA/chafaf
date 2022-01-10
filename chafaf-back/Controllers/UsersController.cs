
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using chafaf_back.Data;
using chafaf_back.Dtos;
using System.Collections.Generic;

namespace chafaf_back.Controllers
{    
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDepensesRepository _repo;
        private readonly IMapper _mapper;
        
        public UsersController(IDepensesRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var userToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(users);
        }

        [HttpGet("{id}", Name ="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForListDto>(user);
            return Ok(userToReturn);
        }
        
    }
}