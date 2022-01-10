using AutoMapper;
using chafaf_back.Dtos;
using chafaf_back.models;

namespace chafaf_back.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<UserForListDto, User>();
            CreateMap<CreateDepensesDto, Depenses>();
            CreateMap<UpdateDepensesDto, Depenses>();
            CreateMap<CreateDonsDto, Dons>();
            CreateMap<UpdateDonsDto, Dons>();
        }
        
    }
}