using MicroBsAPI.Data;
using System.ComponentModel.DataAnnotations;

namespace MicroBsAPI.Models
{
    public class User : IEntity
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
