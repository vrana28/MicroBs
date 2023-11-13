using MicroBsAPI.Data;
using MicroBsAPI.Data.EFCore;
using MicroBsAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

namespace MicroBsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController <User, EfCoreUserRepository>
    {
        EfCoreUserRepository _repository;
        public UserController(EfCoreUserRepository repository) : base(repository)
        {
            _repository = repository;

        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] User u)
        {
            var user = await _repository.Login(u);

            if (user != null)
            {
                return Ok(user);
            }

            return Unauthorized();
        }

    }
}
