using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WishList.Models.BaseEnetity;

namespace WishList.Models
{
    public class WishList: DeletableEntity
    {
        private ICollection<Gift> gifts;
        private ICollection<ApplicationUser> votedUsers;

        public WishList()
        {
            this.gifts = new HashSet<Gift>();
            this.votedUsers = new HashSet<ApplicationUser>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int VoteCount { get; set; }
        public virtual ApplicationUser User { get; set; }

        public ICollection<ApplicationUser> VotedUsers
        {
            get
            {
                return this.votedUsers;
            }
            set
            {
                this.votedUsers = value;
            }
        }

        public virtual ICollection<Gift> Gifts
        {
            get
            {
                return this.gifts;
            }
            set
            {
                this.gifts = value;
            }
        }
    }
}
