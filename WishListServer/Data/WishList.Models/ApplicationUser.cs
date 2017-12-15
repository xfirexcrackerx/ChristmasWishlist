using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace WishList.Models
{
    public class ApplicationUser : IdentityUser
    {
        private ICollection<WishList> wishLists;

        public ApplicationUser()
        {
            this.wishLists = new HashSet<WishList>();
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<WishList> WishLists
        {
            get
            {
                return this.wishLists;
            }
            set
            {
                this.wishLists = value;
            }
        }
    }
}
