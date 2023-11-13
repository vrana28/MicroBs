using MicroBsAPI.Context;
using MicroBsAPI.Models;

namespace MicroBsAPI.Data.EFCore
{
    public class EfCoreEmployeeRepository : EfCoreRepository<Employee, MicroBsDbContext>
    {
        public EfCoreEmployeeRepository(MicroBsDbContext context) : base(context)
        {

        }
    }
}
