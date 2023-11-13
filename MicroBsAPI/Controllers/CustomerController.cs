using MicroBsAPI.Data;
using MicroBsAPI.Data.EFCore;
using MicroBsAPI.Models;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

namespace MicroBsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : BaseController<Customer, EfCoreCustomerRepository>
    {
        EfCoreCustomerRepository _repository;
        public CustomerController(EfCoreCustomerRepository repository) : base(repository)
        {
            _repository = repository;
        }

        // GET: api/[controller]/5
        [HttpGet("{employeeId}")]
        public async Task<ActionResult<List<CustomerDto>>> GetCustomersByEmployeeId(Guid employeeId)
        {
            var customers = await _repository.GetCustomersByEmployeeId(employeeId);
            if (customers == null)
            {
                return NotFound();
            }
            return customers;
        }
    }
}
