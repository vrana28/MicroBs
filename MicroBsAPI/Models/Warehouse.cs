using MicroBsAPI.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MicroBsAPI.Models
{
    public class Warehouse
    {
        [Key]
        public int Id { get; set; } 
        public string Name { get; set; } = string.Empty;

        [ForeignKey("Employee")]
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; } = new Employee();
    }
}
