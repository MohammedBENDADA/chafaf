using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using chafaf_back.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using chafaf_back.models;
using chafaf_back.Dtos;
using chafaf_back.Helpers;
using AutoMapper;

namespace chafaf_back.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class DepensesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
       
        public DepensesController(DataContext context ,IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        //Get api/value
       
        [HttpGet]
        public async Task<IActionResult> GetDepenses()
        {
            var Depenses = await _context.Depenses.ToListAsync();
            return Ok(Depenses);
        }

        // [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDpense(int id)
        {
            var Depense = await _context.Depenses.FirstOrDefaultAsync(x => x.DepensesId ==id);
            return Ok(Depense);
        }

        [HttpGet("/depenseUser/{idUser}")]
        public async Task<IActionResult> GetDpenseByUser(int idUser)
        {
  
            var Depense =  await _context.Depenses.Where(x => x.UserId ==idUser).ToListAsync();
            
            return Ok(Depense);
        }

        [HttpPost]
        public async Task<ActionResult<Depenses>> AjouterDepenes (CreateDepensesDto depensesDto)
        {
            var depense = _mapper.Map<Depenses>(depensesDto);

            _context.Depenses.Add(depense);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("AjouterDepenes" , new { DepensesId = depense.DepensesId} , depense);

            return BadRequest(new ProblemDetails { Title = "Problem creating new product"});
        }

        [HttpPut]
        public async Task<ActionResult> UpdateDepense(UpdateDepensesDto depenseDto)
        {
            var depense = await _context.Depenses.FindAsync(depenseDto.DepensesId);

            if (depense == null) return NotFound();

            _mapper.Map(depenseDto, depense);

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return NoContent();

            return BadRequest(new ProblemDetails{Title = "Problem updating product"});
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletDepens(int id)
        {
            var depense = await _context.Depenses.FindAsync(id);

            if (depense == null) return NotFound();

            _context.Depenses.Remove(depense);

            var result = await _context.SaveChangesAsync() > 0;

            if ( result) return Ok();

            return BadRequest(new ProblemDetails{Title = "Problem deleting depense"});

            
        }
     
    }
}