using MicroBsAPI.Context;
using MicroBsAPI.Models;

namespace MicroBsAPI.Data.EFCore
{
    public class EfCoreCustomerRepository : EfCoreRepository<Customer, MicroBsDbContext>
    {
        MicroBsDbContext _context;
        public EfCoreCustomerRepository(MicroBsDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<List<CustomerDto>> GetCustomersByEmployeeId(Guid employeeId)
        {

            if (employeeId == Guid.Empty) { throw new ArgumentNullException(); }

            var customers = _context.Customers.ToList();
            var employees = _context.Employees.ToList();

            var result = new List<CustomerDto>();

            foreach (Customer c in customers)
            {
                if (c.EmployeeId == employeeId)
                {
                    var dto = new CustomerDto()
                    {
                        Id = c.Id,
                        EmployeeId = employeeId,
                        Name = c.Name,
                        PIB = c.PIB,
                        EmployeeName = employees.Where(_ => _.Id == employeeId).First().Name
                    };
                    result.Add(dto);
                }
            }
            return result;
        }

    }
}
