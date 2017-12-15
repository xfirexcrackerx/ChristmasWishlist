using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WishList.Models;

namespace WishList.Data
{
    public interface IUowData
    {
        IRepository<ApplicationUser> ApplicationUsers { get; }
        IRepository<WishList.Models.WishList> WishLists { get; }
        IRepository<Gift> Gifts { get; }

        int SaveChanges();
    }
}
