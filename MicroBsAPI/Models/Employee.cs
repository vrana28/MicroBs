using MicroBsAPI.Data;
using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MicroBsAPI.Models
{
    public class Employee : IEntity
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public ICollection<Warehouse> Warehouses { get; } = new List<Warehouse>();
        public ICollection<Customer> Customers { get; } = new List<Customer>();
    }
}
