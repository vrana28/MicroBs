using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MicroBsAPI.Models;
using MicroBsAPI.Data.EFCore;

namespace MicroBsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController :  BaseController<Employee, EfCoreEmployeeRepository>
    {
        public EmployeesController(EfCoreEmployeeRepository repository) : base(repository)
        {

        }
    }
}
