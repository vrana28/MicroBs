using MicroBsAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MicroBsAPI.Context
{
    public class MicroBsDbContext : DbContext
    {
        public MicroBsDbContext(DbContextOptions<MicroBsDbContext> options): base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}
