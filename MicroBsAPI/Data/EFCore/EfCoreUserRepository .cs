using MicroBsAPI.Context;
using MicroBsAPI.Models;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;
using System.Data.Entity;

namespace MicroBsAPI.Data.EFCore
{
    public class EfCoreUserRepository : EfCoreRepository<User, MicroBsDbContext>
    {
        MicroBsDbContext _context;
        public EfCoreUserRepository(MicroBsDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<User> Login(User request)
        {

            if (request == null) { throw new ArgumentNullException(); }

            var users = _context.Users.ToList();

            foreach (User u in users)
            {
                if (u.Username == request.Username && u.Password == request.Password)
                {
                    return u;
                }
            }
            return null;
        }
    }
}
