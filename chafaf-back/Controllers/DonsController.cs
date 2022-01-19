using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using chafaf_back.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using chafaf_back.models;
using chafaf_back.Dtos;

namespace chafaf_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DonsController : ControllerBase
    {
        private readonly DataContext _context;

        private readonly IMapper _mapper;
        public DonsController(DataContext context, IMapper mapper){
            _mapper = mapper;
            _context = context;
        }
        //Get api/value
       
        [HttpGet]
        public async Task<IActionResult> GetDons()
        {
            var Dons = await _context.Dons.ToListAsync();
            return Ok(Dons);
        }

        [AllowAnonymous]

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDon(int id)
        {
           
            var Don = await _context.Dons.FirstOrDefaultAsync(x => x.Id ==id);
            return Ok(Don);
        }

        [HttpGet("/donUser/{idUser}")]
        public async Task<IActionResult> GetDoneByUser(int idUser)
        {
  
            var Don = await _context.Dons.Where(x => x.UserId ==idUser).ToListAsync();
            
            return Ok(Don);
        }

        [HttpPost]
        public async Task<ActionResult<Dons>> AjouterDons (CreateDonsDto donDto)
        {
            var don = _mapper.Map<Dons>(donDto);

            _context.Dons.Add(don);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("AjouterDons" , new { Id = don.Id} , don);

            return BadRequest(new ProblemDetails { Title = "Problem creating new product"});
//-------------------------------------------------------------------------------------
           
        }

        [HttpPut]
        public async Task<ActionResult> UpdateDon(UpdateDonsDto donDto)
        {
            var don = await _context.Dons.FindAsync(donDto.Id);

            if (don == null) return NotFound();

            _mapper.Map(donDto, don);

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return NoContent();

            return BadRequest(new ProblemDetails{Title = "Problem updating product"});
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletDons(int id)
        {
            var don = await _context.Dons.FindAsync(id);

            if (don == null) return NotFound();

            _context.Dons.Remove(don);

            var result = await _context.SaveChangesAsync() > 0;

            if ( result) return Ok();

            return BadRequest(new ProblemDetails{Title = "Problem deleting depense"});

            
        }
    }
}