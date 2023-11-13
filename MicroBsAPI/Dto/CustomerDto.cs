using MicroBsAPI.Data;
using System.ComponentModel.DataAnnotations.Schema;

namespace MicroBsAPI.Models
{
    public class CustomerDto : IEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int PIB { get; set; }

        [ForeignKey("Employee")]
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; } = new Employee();

        // added

        public string EmployeeName { get; set; }
    }
}
